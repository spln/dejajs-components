/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { OverlayOrigin } from '@angular/cdk/overlay';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, Optional, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import * as moment_ from 'moment';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { KeyCodes } from '../../common/core/keycodes.enum';
import { DejaConnectionPositionPair } from '../../common/core/overlay/connection-position-pair';
import { DejaChildValidatorDirective } from '../../common/core/validation/child-validator.directive';
import { DaysOfWeek, DejaDateSelectorComponent } from '../date-selector/date-selector.component';
import { formatToMask, formatToUnitOfTime } from './format-to-mask';
const moment: (value?: any, format?: string) => moment_.Moment = (<any>moment_).default || moment_;

const noop = () => { };

/**
 * Date-picker component for Angular2
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'deja-date-picker',
    styleUrls: ['./date-picker.component.scss'],
    templateUrl: './date-picker.component.html',
})
export class DejaDatePickerComponent implements OnInit, ControlValueAccessor, AfterContentInit, OnDestroy {
    private static formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    /** Maximum date avaliable inside date-picker */
    @Input() public dateMax: Date;
    /** Minimum date avaliable inside date-picker */
    @Input() public dateMin: Date;
    /** Date format. If unset, format will be 'YYYY-MM-DD' + ' HH:mm' it's a date-time selector */
    @Input() public set format(format: string) {
        this._format = format;
        this.formatChanged$.next(format);
    }
    /** Placeholder for input */
    @Input() public placeholder = 'Date';
    /** Disabled dates. It's an array of DaysOfWeek (number between 0 and 6) or a date. */
    @Input() public disableDates: Array<DaysOfWeek | Date>; // | ((d: Date) => boolean);
    /** Reference to DejaDateSelectorComponent inside thic control */
    @ViewChild(DejaDateSelectorComponent) public dateSelectorComponent: DejaDateSelectorComponent;
    /** Template for MdHint inside md-input-container */
    @ContentChild('hintTemplate') public mdHint;
    /** Template for MdError inside md-input-container */
    @ContentChild('errorTemplate') public mdError;
    /** Offset de position horizontal de la zone de dropdown */
    @Input() public overlayOffsetX = 0;
    /** Offset de position verticale de la zone de dropdown */
    @Input() public overlayOffsetY = 6;
    /** Mask for input */
    protected _mask: any[];

    public get mask() {
        return this._mask;
    }

    /** Internal use */
    public overlayOrigin: OverlayOrigin;

    @ViewChild(DejaChildValidatorDirective) private inputValidatorDirective: DejaChildValidatorDirective;

    private isAlive = true;
    private _disabled: boolean;
    private _required: boolean;
    private _time: boolean;
    private _format: string;
    private inputElement$ = new ReplaySubject<HTMLElement>(1);
    private inputElement: HTMLElement;
    private focus$ = new Subject();
    private _showDropDown = false;
    private _positions = DejaConnectionPositionPair.default;
    private isMobile = false;
    private contentInitialized$ = new Subject();

    private date = new Date();

    private _inputModel;
    private cursorPosition: number;
    private formatChanged$ = new Subject<string>();
    private dateChanged$ = new Subject<Date>();

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    @ViewChild('inputelement')
    private set inputElementRef(element: ElementRef) {
        if (element) {
            this.inputElement = element.nativeElement;
            this.inputElement$.next(this.inputElement);
        }
    }

    public get inputModel() {
        return this._inputModel;
    }

    @Input()
    public set positions(value: DejaConnectionPositionPair[] | string) {
        this._positions = typeof value === 'string' ? DejaConnectionPositionPair.parse(value) : value;
    }

    public get positions() {
        return !this.isMobile ? this._positions : DejaConnectionPositionPair.parse('centre centre centre centre');
    }

    /**
     * Constructor
     * subscribe on fifferent events needed inside this component
     */
    constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef, @Self() @Optional() public _control: NgControl, @Optional() private _parentForm: NgForm, @Optional() private _parentFormGroup: FormGroupDirective, media: ObservableMedia) {
        if (this._control) {
            this._control.valueAccessor = this;
        }

        Observable.merge(this.contentInitialized$, media.asObservable())
            .takeWhile(() => this.isAlive)
            .subscribe(() => {
                this.isMobile = media.isActive('xs') || media.isActive('sm');
                this.changeDetectorRef.markForCheck();
            });

        if (this._parentForm) {
            this._parentForm.ngSubmit.subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        if (this._parentFormGroup) {
            this._parentFormGroup.ngSubmit.subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        const keydown$ = Observable.from(this.inputElement$)
            .switchMap((element) => Observable.fromEvent(element, 'keydown'));

        const cursorChanged$ = Observable.from(this.inputElement$)
            .switchMap((element: HTMLInputElement) => {
                return Observable.merge(Observable.fromEvent(element, 'mouseup'), Observable.fromEvent(element, 'focus'), Observable.fromEvent(element, 'keyup'))
                    .map(() => {
                        return element.selectionStart;
                    });
            });

        cursorChanged$.takeWhile(() => this.isAlive)
            .subscribe((position: number) => {
                this.cursorPosition = position;
            });

        keydown$.takeWhile(() => this.isAlive)
            .filter((event: KeyboardEvent) => !this.showDropDown && (event.keyCode === KeyCodes.KeyD || event.keyCode === KeyCodes.UpArrow || event.keyCode === KeyCodes.DownArrow))
            .subscribe((event: KeyboardEvent) => {
                event.preventDefault();
                switch (event.keyCode) {
                    case (KeyCodes.KeyD):
                        this.value = new Date();
                        break;

                    case (KeyCodes.UpArrow):
                        if (event.altKey) {
                            this.open();
                        } else if (this.date) {
                            // If cursor is on number, we can update it
                            if (!isNaN(+this._inputModel[this.cursorPosition - 1])) {
                                // We get an array of all sections of the date format
                                const format = this._format.match(DejaDatePickerComponent.formattingTokens);
                                // We check the letter of the format at cursor position
                                const f = this._format[this.cursorPosition - 1];
                                // With this letter we determinate the format by checking on format array
                                let unitOfTime = format.find((str) => str.indexOf(f) !== -1);
                                // If this format has a corresponding value inside formatToUnitOfTime object we can increment its value with moment.add() method
                                unitOfTime = (unitOfTime && formatToUnitOfTime[unitOfTime]) ? formatToUnitOfTime[unitOfTime] : undefined;
                                if (unitOfTime) {
                                    this.updateModel(moment(this.value).add(1, unitOfTime as moment_.unitOfTime.DurationConstructor).toDate());
                                }
                            }
                        }
                        break;
                    case (KeyCodes.DownArrow):
                        if (event.altKey) {
                            this.open();
                        } else if (this.date) {
                            // Same as arrowUp
                            if (!isNaN(+this._inputModel[this.cursorPosition - 1])) {
                                const format = this._format.match(DejaDatePickerComponent.formattingTokens);
                                const f = this._format[this.cursorPosition - 1];

                                let unitOfTime = format.find((str) => str.indexOf(f) !== -1);
                                unitOfTime = (unitOfTime && formatToUnitOfTime[unitOfTime]) ? formatToUnitOfTime[unitOfTime] : undefined;
                                if (unitOfTime) {
                                    this.updateModel(moment(this.value).subtract(1, unitOfTime as moment_.unitOfTime.DurationConstructor).toDate());
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            });

        const valueUpdated$ = Observable.combineLatest(this.formatChanged$, this.dateChanged$)
            .do(([format]) => {
                let mask = [];
                const array = format.match(DejaDatePickerComponent.formattingTokens);
                array.forEach((val: string) => {
                    if (formatToMask[val]) {
                        mask = [...mask, ...formatToMask[val]];
                    } else {
                        mask.push(val);
                    }
                });

                this._mask = mask;
            });

        valueUpdated$.takeWhile(() => this.isAlive)
            .subscribe(([format, value]) => {
                this.date = value;
                this._inputModel = (this.date) ? moment(this.date).format(format) : null;

                // si la position du curseur était stockée, on la restaure apres avoir changé la valeur
                if (this.cursorPosition) {
                    this.inputElement$.delay(1).first().subscribe((elem: HTMLInputElement) => elem.setSelectionRange(this.cursorPosition, this.cursorPosition));
                }
                this.changeDetectorRef.markForCheck();
            });

        keydown$.takeWhile(() => this.isAlive)
            .filter(() => this.showDropDown)
            .subscribe((event: KeyboardEvent) => {
                switch (event.keyCode) {
                    case (KeyCodes.Escape):
                        this.close();
                        break;

                    default:
                        this.dateSelectorComponent.keyDown(event);

                }
            });

        Observable.combineLatest(this.inputElement$, this.focus$)
            .takeWhile(() => this.isAlive)
            .subscribe(([element]) => element.focus());
    }

    /** unsubscribe to all Observable when component is destroyed */
    public ngOnDestroy() {
        this.isAlive = false;
    }

    /** Init mask */
    public ngOnInit() {
        if (!this._format) {
            const time = this.time ? ' HH:mm' : '';
            this.format = `YYYY-MM-DD${time}`;
        }
    }

    public get showDropDown() {
        return this._showDropDown;
    }

    /** disabled property setter. Can be string or empty so you can use it like : <deja-date-picker disabled></deja-date-picker> */
    @Input()
    public set disabled(value: boolean | string) {
        this._disabled = coerceBooleanProperty(value) ? true : null;
        this.changeDetectorRef.markForCheck();
    }

    /** disabled property getter. */
    public get disabled() {
        return this._disabled;
    }

    /** required property setter. Can be string or empty so you can use it like : <deja-date-picker required></deja-date-picker> */
    @Input()
    public set required(value: boolean | string) {
        this._required = coerceBooleanProperty(value) ? true : null;
        this.changeDetectorRef.markForCheck();
    }

    /** required property getter. */
    public get required() {
        return this._required;
    }

    /**
     * Time property setter. Can be string or empty so you can use it like : <deja-date-picker time></deja-date-picker>
     * Used to add time selector next to calendar
     */
    @Input()
    public set time(value: boolean | string) {
        this._time = coerceBooleanProperty(value) ? true : null;
        this.changeDetectorRef.markForCheck();
    }

    /** Time property getter */
    public get time() {
        return this._time;
    }

    /** Method to close date-picker dialog */
    public close() {
        this._showDropDown = false;
        return false;
    }

    /** Method to open date-picker dialog */
    public open() {
        // Set overlay origin element
        const originElement: HTMLElement = (this.isMobile && document.body) || this.inputElement || this.elementRef.nativeElement;
        this.overlayOrigin = new OverlayOrigin(new ElementRef(originElement));
        this._showDropDown = true;
        this.changeDetectorRef.markForCheck();
    }

    /** set accessor including call the onchange callback */
    public set value(v: Date) {
        if (v !== this.date) {
            this.writeValue(v);
            this.onChangeCallback(v);
        }
    }

    // ************* ControlValueAccessor Implementation **************
    /** get accessor */
    public get value(): Date {
        return this.date;
    }

    /** From ControlValueAccessor interface */
    public writeValue(value: Date) {
        if (value !== this.date) {
            this.dateChanged$.next(value);
        }
    }

    /** From ControlValueAccessor interface */
    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    /** From ControlValueAccessor interface */
    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    // ************* End of ControlValueAccessor Implementation **************

    /** For reactive form. */
    public ngAfterContentInit() {
        this.contentInitialized$.next(true);

        if (this.inputValidatorDirective) {
            this.inputValidatorDirective.parentControl = this._control;
        }
    }

    /** Give focus to this component */
    public setFocus() {
        this.focus$.next();
    }

    /**
     * Called when user click on the input of this component.
     * If click is located on md-icon 'calendar' who is in the mdPrefix of md-input-container, the picker show off.
     *
     * @param {Event} event
     */
    protected toggleDateSelector(event: Event) {
        if (this.disabled) {
            return undefined;
        }

        const target = event.currentTarget as HTMLElement;
        if (target.id !== 'calendar-button') {
            return undefined;
        }

        if (this.showDropDown) {
            this.close();
        } else {
            this.open();
        }
        return false;
    }

    /**
     * ngModelChange of date-selector.
     *
     * @param {Date} newDate Date to set.
     */
    protected onDateChange(newDate: Date) {
        this.value = newDate;
        // TODO
        // if (this.value.getHours() === newDate.getHours() && this.value.getMinutes() === newDate.getMinutes() && this.value.getSeconds() === newDate.getSeconds()) {
        //     this.setFocus();
        // }
    }

    /**
     * Called when input change. If it's a string it's because user set the date manually. So we need to convert it into date with MomentJs.
     *
     * @param {string | Date} date new value of this model
     */
    public updateModel(date: string | Date) {
        if (typeof date === 'string' && date.replace(/_/g, '').length === this._format.length) {
            let d = moment(date, this._format).toDate();
            if (!moment(d).isValid()) {
                d = new Date();
            }
            date = d;
        }

        if (typeof date !== 'string') {
            this.value = date;
        }
    }

    /** Reset date-picker values. */
    protected reset() {
        this.value = undefined;
        delete this._inputModel;
        this.onChangeCallback(this.value);
        this.close();
    }
}
