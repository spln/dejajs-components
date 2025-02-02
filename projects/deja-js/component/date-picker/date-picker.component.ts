/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty, NumberInput } from '@angular/cdk/coercion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorState, ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { _MatInputMixinBase, DejaChildValidatorDirective, DejaConnectionPositionPair, formatWithLocale, KeyCodes } from '@deja-js/component/core';
import { DateComponentLayout, DaysOfWeek, DejaDateSelectorComponent } from '@deja-js/component/date-selector';
import { add, isValid, parse, startOfToday } from 'date-fns';
import { combineLatestWith, delay, filter, fromEvent, map, mergeWith, ReplaySubject, Subject, switchMap, take, takeUntil, tap, timer } from 'rxjs';

import { formatToMask, formatToPattern, formatToUnitOfTime } from './format-to-mask';
import { Pattern } from './models/pattern.model';


/**
 * Date-picker component for Angular
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [{ provide: MatFormFieldControl, useExisting: DejaDatePickerComponent }],
    selector: 'deja-date-picker',
    styleUrls: ['./date-picker.component.scss'],
    templateUrl: './date-picker.component.html'
})
export class DejaDatePickerComponent extends _MatInputMixinBase implements OnInit, ControlValueAccessor, AfterContentInit, DoCheck, OnDestroy, MatFormFieldControl<Date | string>, CanUpdateErrorState {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static nextId = 0;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private static formattingTokens = new RegExp('(\\[[^\\[]*\\])|(\\\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|yyyyyy|yyyyy|yyyy|yy|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)', 'g');


    @HostBinding() public id = `my-tel-input-${DejaDatePickerComponent.nextId++}`;
    @HostBinding('attr.aria-describedby') public describedBy = '';
    @Output() public readonly dateChange = new EventEmitter<Date | string>();
    @Output() public readonly timeChange = new EventEmitter<Date>();

    /** Maximum date avaliable inside date-picker */
    @Input() public dateMax: Date;
    /** Minimum date avaliable inside date-picker */
    @Input() public dateMin: Date;

    @Input() public label: string;
    /** Disabled dates. It's an array of DaysOfWeek (number between 0 and 6) or a date. */
    @Input() public disableDates: Array<DaysOfWeek | Date>; // | ((d: Date) => boolean);
    /** Reference to DejaDateSelectorComponent inside thic control */
    @ViewChild(DejaDateSelectorComponent, { static: true }) public dateSelectorComponent: DejaDateSelectorComponent;
    /** Offset de position horizontal de la zone de dropdown */
    @Input() public overlayOffsetX = 0;
    /** Offset de position verticale de la zone de dropdown */
    @Input() public overlayOffsetY = 6;

    @Input() public updateInputOn: 'change' | 'blur' | 'submit';

    public get overlayContainerClass(): string {
        let oc = 'deja-datepicker-overlay-container';
        if (this.breakpointObserver.isMatched('(max-height: 900px)')) {
            oc += ' under-toolbar-position';
        }
        if (this.breakpointObserver.isMatched('(max-height: 550px)')) {
            oc += ' top-position';
        }
        return oc;
    }

    @ViewChild(DejaChildValidatorDirective) private inputValidatorDirective: DejaChildValidatorDirective;

    @HostBinding('class.floating')
    public get shouldLabelFloat(): boolean {
        return this.focused || !this.empty || !!this.mask;
    }

    public _layout: NumberInput;

    /** Date format. If unset, format will be 'yyyy-MM-dd' + ' HH:mm' it's a date-time selector */
    @Input() public set format(dateFormat: string) {
        this._format = dateFormat;
        this.formatChanged$.next(dateFormat);
    }

    public get format(): string {
        return this._format;
    }

    /** Placeholder for input */
    @Input() public get placeholder(): string {
        return this._placeholder;
    }

    public set placeholder(plh: string) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    /** Afficher un bouton raccourcis permettant de sélectionner la date courante */
    @Input() public set showCurrentDateButton(value: boolean) {
        this._showCurrentDateButton = coerceBooleanProperty(value);
    }

    public get showCurrentDateButton(): boolean {
        return this._showCurrentDateButton;
    }

    public get ngModelOptions(): { updateOn: 'change' | 'blur' | 'submit' } {
        return {
            updateOn: this.updateInputOn || 'blur'
        };
    }

    /** matFormField implementation */
    // eslint-disable-next-line rxjs/finnish
    public stateChanges = new Subject<void>();

    /** Permettre la saisie de texte libre */
    @Input()
    public set allowFreeEntry(value: BooleanInput) {
        this._allowFreeEntry = coerceBooleanProperty(value) || null;
    }

    public get allowFreeEntry(): BooleanInput {
        return this._allowFreeEntry;
    }

    /** Mask for input */
    public _mask = '';

    public get mask(): string {
        return this._mask;
    }

    /** Pattern for input */
    public _pattern: Pattern;

    public get pattern(): Pattern {
        return this._pattern;
    }

    /** Internal use */
    public overlayOwnerElement: HTMLElement;
    public date: Date | string;

    /** matFormField focus implementation */
    public focused = false;

    /** This property indicates whether the associated NgControl is in an error state. */
    public errorState = false;

    /** This property allows us to specify a unique string for the type of control in form field.
     * The <mat-form-field> will add an additional class based on this type that can be used to
     * easily apply special styles to a <mat-form-field> that contains a specific type of control.
     * In this example we'll use deja-date-picker as our control type which will result in the form field
     * adding the class mat-form-field-deja-date-picker.
     */
    public controlType = 'deja-date-picker';

    public formatChanged$ = new Subject<string>();

    protected destroyed$ = new Subject<void>();

    private _allowFreeEntry = false;

    /** Default placeholder for input */
    private _placeholder: string;
    private _showCurrentDateButton: boolean;
    private _disabled: boolean;
    private _required: boolean;
    private _time: boolean;
    private _format: string;
    private inputElement$ = new ReplaySubject<HTMLInputElement>(1);
    private inputElement: HTMLInputElement;
    private focus$ = new Subject<void>();
    private _showDropDown = false;
    private _positions = DejaConnectionPositionPair.default;

    private _inputModel: string;
    private cursorPosition: number;
    private dateChanged$ = new Subject<Date | string>();

    @ViewChild('inputelement')
    public set inputElementRef(element: ElementRef<HTMLInputElement>) {
        if (element) {
            this.inputElement = element.nativeElement;
            this.overlayOwnerElement = this.inputElement || this.elementRef.nativeElement;
            this.inputElement$.next(this.inputElement);
        } else {
            this.overlayOwnerElement = this.elementRef.nativeElement;
        }
    }

    public get inputModel(): string {
        return this._inputModel;
    }

    @Input()
    public set positions(value: DejaConnectionPositionPair[] | string) {
        this._positions = typeof value === 'string' ? DejaConnectionPositionPair.parse(value) : value;
    }

    public get positions(): DejaConnectionPositionPair[] | string {
        return this._positions;
    }

    public get empty(): boolean {
        return !this.value;
    }

    /**
     * Constructor
     * subscribe on different events needed inside this component
     */
    public constructor(
        private elementRef: ElementRef<HTMLInputElement>,
        private changeDetectorRef: ChangeDetectorRef,
        @Self() @Optional() public ngControl: NgControl,
        @Optional() _parentForm: NgForm,
        @Optional() _parentFormGroup: FormGroupDirective,
        _defaultErrorStateMatcher: ErrorStateMatcher,
        private fm: FocusMonitor,
        private breakpointObserver: BreakpointObserver
    ) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);

        console.warn('@deja-js/component/date-picker is deprecated, and will be removed in a further version. Please use mat-datepicker instead. Look at the mat-datepicker demo page of @deja-js/component for implementation.');

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
        this.overlayOwnerElement = this.elementRef.nativeElement;

        if (this._parentForm) {
            this._parentForm.ngSubmit.pipe(
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        if (this._parentFormGroup) {
            this._parentFormGroup.ngSubmit.pipe(
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        fm.monitor(this.elementRef.nativeElement, true).pipe(
            map(origin => {
                this.focused = !!origin;
                if (!this.focused) {
                    this.onTouchedCallback();
                } else {
                    return !this.value;
                }
                return false;
            }),
            filter(select => select),
            delay(1),
            takeUntil(this.destroyed$)
        ).subscribe(() => this.inputElement.setSelectionRange(0, 0));

        const keydown$ = this.inputElement$.pipe(
            switchMap(element => fromEvent<KeyboardEvent>(element, 'keydown'))
        );

        const cursorChanged$ = this.inputElement$.pipe(
            switchMap(element => fromEvent<MouseEvent>(element, 'mouseup').pipe(
                mergeWith(fromEvent<Event>(element, 'focus'), fromEvent<KeyboardEvent>(element, 'keyup')),
                map(() => element.selectionStart)
            ))
        );

        cursorChanged$.pipe(
            takeUntil(this.destroyed$)
        ).subscribe(position => this.cursorPosition = position);

        keydown$.pipe(
            filter(event => !this.showDropDown && (event.code === KeyCodes.KeyD || event.code === KeyCodes.UpArrow || event.code === KeyCodes.DownArrow)),
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            switch (event.code) {
                case (KeyCodes.KeyD):
                    if (!this.allowFreeEntry) {
                        event.preventDefault();
                        this.setToCurrentDate();
                    }
                    break;

                case (KeyCodes.UpArrow):
                    event.preventDefault();
                    if (event.altKey) {
                        this.open();
                    } else if (this.date) {
                        // If cursor is on number, we can update it
                        if (!isNaN(+this._inputModel[this.cursorPosition - 1])) {
                            const updatedValue = this.incrementDateBySegment(1);
                            this.updateModel(!this.dateMax || updatedValue <= this.dateMax ? updatedValue : this.value);
                        }
                    }
                    break;
                case (KeyCodes.DownArrow):
                    event.preventDefault();
                    if (event.altKey) {
                        this.open();
                    } else if (this.date) {
                        // Same as arrowUp
                        if (!isNaN(+this._inputModel[this.cursorPosition - 1])) {
                            const updatedValue = this.incrementDateBySegment(-1);
                            this.updateModel(!this.dateMin || updatedValue >= this.dateMin ? updatedValue : this.value);
                        }
                    }
                    break;
                default:
                    break;
            }
        });

        const valueUpdated$ = this.formatChanged$.pipe(
            combineLatestWith(this.dateChanged$),
            tap(([dateFormat]) => {
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                const array = dateFormat.match(DejaDatePickerComponent.formattingTokens);
                this._mask = array.map(val => formatToMask[val] || val).join('');

                this._pattern = array.reduce((patternBuilder, val) => {
                    const patternSection = formatToPattern[val] || null;
                    if (patternSection) {
                        patternSection.forEach((value, key) => {
                            patternBuilder[key] = value;
                        });
                    }
                    return patternBuilder;
                }, {} as Pattern);
            })
        );

        const inputElement$ = this.inputElement$.pipe(
            delay(1),
            take(1)
        );

        valueUpdated$.pipe(
            tap(([dateFormat, value]) => {
                this.date = value;
                this._inputModel = (this.date && (this.date instanceof Date ? formatWithLocale(this.date, dateFormat) : this.date)) || null;
                this.changeDetectorRef.markForCheck();
            }),
            filter(() => this.cursorPosition && !this.allowFreeEntry),
            switchMap(() => inputElement$),
            takeUntil(this.destroyed$)
        ).subscribe(elem => elem.setSelectionRange(this.cursorPosition, this.cursorPosition)); // si la position du curseur était stockée, on la restaure apres avoir changé la valeur

        keydown$.pipe(
            filter(() => this.showDropDown),
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            if (event.code === KeyCodes.Escape) {
                this.close();
            } else {
                this.dateSelectorComponent.keyDown(event);
            }
        });

        this.inputElement$.pipe(
            combineLatestWith(this.focus$),
            takeUntil(this.destroyed$)
        ).subscribe(([element]) => element.focus());
    }

    public onChangeCallback = (_a?: unknown): void => undefined;
    public onTouchedCallback = (): void => undefined;

    /** unsubscribe to all Observable when component is destroyed */
    public ngOnDestroy(): void {
        this.fm.stopMonitoring(this.elementRef.nativeElement);
        this.destroyed$.next();
        this.destroyed$.unsubscribe();
        this.stateChanges.complete();
    }

    /** Init mask */
    public ngOnInit(): void {
        if (!this._format) {
            if (!this.layout || this.layout === DateComponentLayout.dateonly || this.layout === 'dateonly') {
                this.format = 'yyyy/MM/dd';
            } else if (this.layout === DateComponentLayout.datetime || this.layout === 'datetime') {
                this.format = 'yyyy/MM/dd HH:mm';
            } else if (this.layout === DateComponentLayout.timeonly || this.layout === 'timeonly') {
                this.format = 'HH:mm';
            } else {
                this.format = 'yyyy/MM/dd';
            }
        }
    }

    public ngDoCheck(): void {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }

    /** This method is used by the <mat-form-field> to specify the IDs that should be used for the aria-describedby attribute of your component.
     * The method has one parameter, the list of IDs, we just need to apply the given IDs to our host element.
     */
    public setDescribedByIds(ids: string[]): void {
        this.describedBy = ids.join(' ');
    }

    /** This method will be called when the form field is clicked on.
     * It allows your component to hook in and handle that click however it wants.
     * The method has one parameter, the MouseEvent for the click.
     * In our case we'll just focus the first <input> if the user isn't about to click an <input> anyways.
     */
    public onContainerClick(event: MouseEvent): void {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elementRef.nativeElement.querySelector('input').focus();
        }
    }

    public get showDropDown(): boolean {
        return this._showDropDown;
    }

    /** disabled property setter. Can be string or empty so you can use it like : <deja-date-picker disabled></deja-date-picker> */
    @Input()
    public set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value) ? true : null;
        this.stateChanges.next();
        this.changeDetectorRef.markForCheck();
    }

    /** disabled property getter. */
    public get disabled(): boolean {
        return this._disabled;
    }

    /** required property setter. Can be string or empty so you can use it like : <deja-date-picker required></deja-date-picker> */
    @Input()
    public set required(value: boolean) {
        this._required = coerceBooleanProperty(value) || null;
        this.stateChanges.next();
    }

    /** required property getter. */
    public get required(): boolean {
        return this._required;
    }

    /**
     * Component Layout
     */
    @Input()
    public set layout(value: DateComponentLayout | string) {
        if (value) {
            this._layout = value;
        }
        this.changeDetectorRef.markForCheck();
    }

    public get layout(): string | DateComponentLayout {
        return this._layout;
    }

    /**
     * Time property setter. Can be string or empty so you can use it like : <deja-date-picker time></deja-date-picker>
     * Used to add time selector next to calendar
     */
    @Input()
    public set time(value: BooleanInput) {
        this._time = coerceBooleanProperty(value) ? true : null;
        if (this._time) {
            this.layout = DateComponentLayout.datetime;
        }
        this.changeDetectorRef.markForCheck();
    }

    /** Time property getter */
    public get time(): BooleanInput {
        return this._time;
    }

    /** Method to close date-picker dialog */
    public close(): boolean {
        this._showDropDown = false;
        this.changeDetectorRef.markForCheck();
        return false;
    }

    /** Method to open date-picker dialog */
    public open(): void {
        this._showDropDown = true;
        this.changeDetectorRef.markForCheck();
    }

    /** set accessor including call the onchange callback */
    public set value(v: Date | string) {
        if (v !== this.date) {
            this.writeValue(v);
            this.onChangeCallback(v);
            this.stateChanges.next();
        }
    }

    // ************* ControlValueAccessor Implementation **************
    /** get accessor */
    public get value(): Date | string {
        return this.date;
    }

    /** From ControlValueAccessor interface */
    public writeValue(value: Date | string): void {
        if (value !== this.date) {
            this.dateChanged$.next(value);
        }
    }

    /** From ControlValueAccessor interface */
    public registerOnChange(fn: (_a: unknown) => void): void {
        this.onChangeCallback = fn;
    }

    /** From ControlValueAccessor interface */
    public registerOnTouched(fn: () => void): void {
        this.onTouchedCallback = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
    // ************* End of ControlValueAccessor Implementation **************

    /** For reactive form. */
    public ngAfterContentInit(): void {
        if (this.inputValidatorDirective) {
            this.inputValidatorDirective.parentControl = this.ngControl;
        }
    }

    /** Give focus to this component */
    public setFocus(): void {
        this.focus$.next();
    }

    /**
     * Called when user click on the input of this component.
     * If click is located on icon 'calendar' who is in the matPrefix of mat-form-field-container, the picker show off.
     *
     * @param event
     */
    public toggleDateSelector(event: Event): boolean {
        if (this.disabled) {
            return undefined;
        }

        const target = event.currentTarget as HTMLElement;
        if (target.id !== 'calendar-button') {
            return undefined;
        }

        this.open();

        return false;
    }

    /**
     * Called when input change. If it's a string it's because user set the date manually. So we need to convert it into date with MomentJs.
     *
     * @param date new value of this model
     */
    public updateModel(date: string | Date): void {
        if (typeof date === 'string' && !this.allowFreeEntry) { // && date.replace(/_/g, '').length === this._format.length) {
            if (date.replace(/_/g, '').length === this._format.length) { // If mask is fully filled
                const mDate = parse(date, this._format, startOfToday());
                if (mDate && isValid(mDate)) {
                    date = mDate || null;
                } else {
                    console.warn('[DatePicker]: Invalid Date');
                    this.ngControl.control.setErrors({ invalidMask: true });
                    this.changeDetectorRef.markForCheck();
                }
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            } else if (!date.match(/[0-9]/)) { // if mask is empty - do nothing
                return;
            } else { // If mask is partially filled
                date = null;
                console.warn('[DatePicker]: Invalid Date');
                this.ngControl.control.setErrors({ invalidMask: true });
                this.changeDetectorRef.markForCheck();
            }
        }

        if (date instanceof Date) {
            if (this.value instanceof Date && this.value && this.value.getTime() === date.getTime()) {
                return;
            }

            let event: EventEmitter<Date | string>;

            // now we check if it's date or time who is updated to raise correct event
            if (this.value instanceof Date && this.value && (date.getFullYear() !== this.value.getFullYear() || date.getMonth() !== this.value.getMonth() || date.getDate() !== this.value.getDate())) {
                event = this.dateChange;
            } else if (this.value instanceof Date && this.value && (date.getHours() !== this.value.getHours() || date.getMinutes() !== this.value.getMinutes() || date.getSeconds() !== this.value.getSeconds() || date.getMilliseconds() !== this.value.getMilliseconds())) {
                event = this.timeChange;
            } else {
                event = this.dateChange;
            }

            this.value = date;
            this.onTouchedCallback();
            event.emit(date);

            if (!this._layout || this._layout === DateComponentLayout.dateonly) {
                this.close();
            } else {
                this.changeDetectorRef.markForCheck();
            }
        } else if (this.allowFreeEntry) {
            this.value = date;
            this.onTouchedCallback();
            this.dateChange.emit(date);
            this.changeDetectorRef.markForCheck();
        }
    }

    /** Reset date-picker values. */
    public reset(): void {
        // To prevent "ExpressionChangedAfterItHasBeenCheckedError"
        timer(0).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this.value = null;
            delete this._inputModel;
        });
        this.close();
    }

    public setToCurrentDate(): void {
        this.value = new Date();

        this.selectHours();
    }

    private selectHours(): void {
        if (this.layout === DateComponentLayout.datetime) {
            timer(0).pipe(
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                const hoursTemplate = formatWithLocale(this.toDate(this.date), 'HH:mm');
                const stringDate = this.inputElement.value;
                const hoursPosition = stringDate.indexOf(hoursTemplate);
                this.inputElement.setSelectionRange(hoursPosition, stringDate.length);
            });
        }
    }

    private incrementDateBySegment(increment: number): string | Date {
        // We get an array of all sections of the date format
        // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
        const dateFormat = this._format.match(DejaDatePickerComponent.formattingTokens);
        // We check the letter of the format at cursor position
        const f = this._format[this.cursorPosition - 1];
        // With this letter we determinate the format by checking on format array
        let unitOfTime = dateFormat.find(str => str.includes(f));
        // If this format has a corresponding value inside formatToUnitOfTime object we can increment its value with moment.add() method
        unitOfTime = (unitOfTime && formatToUnitOfTime[unitOfTime]) || undefined;
        if (unitOfTime) {
            const duration = {
                [unitOfTime]: increment
            } as Duration;
            const updatedValue = add(this.toDate(this.value), duration);
            return updatedValue;
        }

        return this.value;
    }

    private toDate(value: Date | string): Date {
        return typeof value === 'string' ? parse(value, this.format, startOfToday()) : value;
    }
}
