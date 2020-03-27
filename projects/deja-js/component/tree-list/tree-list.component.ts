/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorState, ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { IDejaDragEvent } from '@deja-js/component/dragdrop';
import { DejaChildValidatorDirective, DejaClipboardService, DejaItemComponent, DejaItemEvent, DejaItemsEvent, GroupingService, IFindItemResult, IItemBase, IItemTree, ItemListBase, ItemListService, IViewListResult, IViewPort, KeyCodes, Position, Rect, SortingService, ViewportMode, ViewPortService } from '@deja-js/core';
import { BehaviorSubject, combineLatest, from, fromEvent, merge, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { debounceTime, filter, first, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { DejaTreeListScrollEvent } from './tree-list-scroll-event';

/** Composant de liste évoluée avec gestion de viewport et templating */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        ViewPortService,
        { provide: MatFormFieldControl, useExisting: DejaTreeListComponent }
    ],
    selector: 'deja-tree-list',
    styleUrls: [
        './tree-list.component.scss',
    ],
    templateUrl: './tree-list.component.html',
})
export class DejaTreeListComponent extends ItemListBase implements CanUpdateErrorState, AfterViewInit, AfterContentInit, ControlValueAccessor, DoCheck, OnDestroy, MatFormFieldControl<any> {
    public static nextId = 0;
    @HostBinding() public id = `deja-tree-list-${DejaTreeListComponent.nextId++}`;
    @HostBinding('class.floating') public get shouldLabelFloat() {
        return this.focused || !this.empty;
    }

    @HostBinding('attr.aria-describedby') public describedBy = '';

    public controlType = 'deja-tree-list';
    public errorState = false;
    public errorStateMatcher: ErrorStateMatcher;
    public stateChanges = new Subject<void>();

    /** Texte affiché si aucune donnée n'est présente dans le tableau */
    @Input() public nodataholder: string;
    /** Correspond au ngModel du champ de filtrage ou recherche */
    @Input() public query = '';
    /** Permet de définir un template de ligne par binding */
    @Input() public itemTemplateExternal: any;
    /** Permet de définir un template de ligne parente par binding. */
    @Input() public parentItemTemplateExternal: any;
    /** Permet de définir un template pour le loader par binding. */
    @Input() public loaderTemplateExternal: any;
    /** Permet de définir un template d'entête de colonne par binding. */
    @Input() public headerTemplateExternal: any;
    /** Permet de définir un template comme prefixe de la zone de recherche par binding. */
    @Input() public searchPrefixTemplateExternal: any;
    /** Permet de définir un template comme suffixe de la zone de recherche par binding. */
    @Input() public searchSuffixTemplateExternal: any;
    /** Largeur des éléments par defaut si différent de 100% */
    @Input() public itemsWidth: number = null;
    /** Exécuté lorsque le déplacement d'une ligne est terminée. */
    @Output() public itemDragEnd = new EventEmitter<IDejaDragEvent>();
    /** Exécuté lorsque le déplacement d'une ligne commence. */
    @Output() public itemDragStart = new EventEmitter<IDejaDragEvent>();
    /** Exécuté lorsque la scrollbar change de position. */
    @Output() public scroll = new EventEmitter<DejaTreeListScrollEvent>();
    /** Exécuté lorsque l'utilisateur sélectionne ou désélectionne une ligne. */
    @Output() public selectedChange = new EventEmitter<DejaItemsEvent | DejaItemEvent>();
    /** Exécuté lorsque le calcul du viewPort est executé. */
    @Output() public viewPortChanged = new EventEmitter<IViewPort>();

    /** Internal use */
    @ViewChild('inputelement') public input: ElementRef;

    private _keyboardNavigation = false;

    // Templates
    @ContentChild('itemTemplate') private itemTemplateInternal: any;
    @ContentChild('parentItemTemplate') private parentItemTemplateInternal: any;
    @ContentChild('loaderTemplate') private loaderTemplateInternal: any;
    @ContentChild('headerTemplate') private headerTemplateInternal: any;
    @ContentChild('searchPrefixTemplate') private searchPrefixTemplateInternal: any;
    @ContentChild('searchSuffixTemplate') private searchSuffixTemplateInternal: any;
    @ContentChildren(DejaItemComponent) public options: DejaItemComponent[];

    // protected _items: IItemBase[]; In the base class, correspond to the model
    private clickedItem: IItemBase;
    private rangeStartIndex = 0;
    private filterExpression = '';
    private _searchArea = false;
    private _sortable = false;
    private _itemsDraggable = false;
    private hasCustomService = false;
    private hasLoadingEvent = false;
    private _modelIsValue = false;
    private _required = false;
    private _placeholder: string;
    private _focused = false;
    @HostBinding('attr.disabled') public _disabled: boolean = null;

    private keyboardNavigation$ = new Subject();

    private mouseUp$sub: Subscription;

    private clearFilterExpression$ = new BehaviorSubject<void>(null);
    private writeValue$ = new Subject<any>();
    private selectItems$ = new Subject<any>();
    private contentInitialized$ = new Subject();
    public setQuery$ = new Subject<string>();

    // NgModel implementation
    public onTouchedCallback = (_a?: any) => { };
    public onChangeCallback = (_a?: any) => { };

    constructor(changeDetectorRef: ChangeDetectorRef,
        public viewPort: ViewPortService,
        private fm: FocusMonitor,
        public elementRef: ElementRef,
        @Self() @Optional() public ngControl: NgControl,
        @Optional() private _parentForm: NgForm,
        @Optional() private _parentFormGroup: FormGroupDirective,
        @Optional() private clipboardService: DejaClipboardService,
        private _defaultErrorStateMatcher: ErrorStateMatcher) {
        super(changeDetectorRef, viewPort);

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }

        this.fm.monitor(elementRef.nativeElement, true).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(origin => {
            this._focused = !!origin;
            this.stateChanges.next();
        });

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

        from(this.clearFilterExpression$).pipe(
            debounceTime(400),
            takeUntil(this.destroyed$)
        ).subscribe(() => this.filterExpression = '');

        from(this.keyboardNavigation$).pipe(
            tap(() => this._keyboardNavigation = true),
            debounceTime(1000),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this._keyboardNavigation = false;
            this.changeDetectorRef.markForCheck();
        });

        fromEvent(window, 'resize').pipe(
            debounceTime(5),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this.viewPort.deleteSizeCache();
            this.viewPort.refresh();
            this.changeDetectorRef.markForCheck();
        });

        from(this.setQuery$).pipe(
            debounceTime(250),
            switchMap(query => {
                this.query = query;
                this.setCurrentItem(undefined);
                return this.calcViewList$();
            }),
            takeUntil(this.destroyed$)
        ).subscribe();

        const selectItems$ = combineLatest(this.selectItems$, this.contentInitialized$).pipe(
            map(([value]) => value),
            map((value) => this.getVirtualSelectedEntities(value)),
            map((value) => (value instanceof Array && value) || (value && [value]) || []),
            tap((values) => super.setSelectedItems(values)));

        const selectModels$ = combineLatest(this.writeValue$, this.contentInitialized$).pipe(
            map(([value]) => {
                if (this.modelIsValue === undefined) {
                    if (value instanceof Array) {
                        const av = value || [];
                        const modelType = av.length && typeof av[0];
                        this.modelIsValue = modelType === 'string' || modelType === 'number';
                    } else {
                        const modelType = typeof value;
                        this.modelIsValue = value === '' || modelType === 'string' || modelType === 'number';
                    }
                }
                if (this.modelIsValue) {
                    this.query = '';
                }
                return value;
            }),
            map((value) => this.getVirtualSelectedEntities(value)),
            tap((value) => super.setSelectedModels(!value || this._multiSelect || value instanceof Array ? value : [value])));

        merge(selectModels$, selectItems$).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            super.getItemListService().ensureSelection();
            this.changeDetectorRef.markForCheck();
        });

        this._viewPortChanged = this.viewPortChanged;

        this.maxHeight = 0;
    }

    @ViewChild('listElement', { static: true }) public set listElememtRef(elem: ElementRef) {
        this.listElement = elem.nativeElement;
    }

    public keyboardNavigation() {
        return this._keyboardNavigation;
    }

    /** Définit la longueur minimale de caractères dans le champ de recherche avant que la recherche ou le filtrage soient effectués */
    @Input('min-search-length')
    public set minSearchlength(value: number | string) {
        this._minSearchLength = coerceNumberProperty(value);
    }

    public get minSearchlength() {
        return this._minSearchLength;
    }

    /** Affiche un barre de recherche au dessus de la liste. */
    @Input()
    public set searchArea(value: boolean | string) {
        this._searchArea = coerceBooleanProperty(value);
    }

    public get searchArea() {
        return this._searchArea || this.minSearchlength > 0;
    }

    /** Définit une valeur indiquant si en reactive form le model renvoyé doit être un obeject oue une valeur */
    @Input()
    public set modelIsValue(value: boolean | string) {
        this._modelIsValue = coerceBooleanProperty(value);
    }

    public get modelIsValue() {
        return this._modelIsValue;
    }

    /** Retourne ou définit une valeur indiquant si les lignes de la liste peuvent être déplacées manuelement par l'utilisateur */
    @Input()
    public set sortable(value: boolean | string) {
        this._sortable = coerceBooleanProperty(value);
    }

    public get sortable() {
        return this._sortable;
    }

    @Input() public get required() {
        return this._required;
    }

    public set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }

    /**
     * Placeholder of the input
     */
    @Input() public get placeholder() {
        return this._placeholder;
    }

    public set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    public get empty() {
        return !this.value;
    }

    public get focused() {
        return this._focused;
    }

    /** Retourne ou définit une valeur indiquant si les lignes peuvent être déplacées vers un autre composant */
    @Input()
    public set itemsDraggable(value: boolean | string) {
        this._itemsDraggable = coerceBooleanProperty(value);
    }

    public get itemsDraggable() {
        return this._itemsDraggable;
    }

    @Input()
    /** Définit le nombre de lignes à sauter en cas de pression sur les touches PageUp ou PageDown */
    public set pageSize(value: number) {
        this._pageSize = coerceNumberProperty(value);
    }

    /** Retourne le nombre de lignes à sauter en cas de pression sur les touches PageUp ou PageDown */
    public get pageSize() {
        if (this._pageSize === 0) {
            const vpRowHeight = this.getViewPortRowHeight();
            const containerHeight = this.maxHeight || this.listElement.clientHeight;
            return Math.floor(containerHeight / vpRowHeight);
        }

        return this._pageSize;
    }

    /** Définit un texte de conseil en cas d'erreur de validation ou autre */
    @Input()
    public set hintLabel(value: string) {
        this.setHintLabel(value);
    }

    /** Retourne un texte de conseil en cas d'erreur de validation ou autre */
    public get hintLabel(): string {
        return this._hintLabel;
    }

    /** Définit la hauteur d'une ligne pour le calcul du viewport en pixels (la valeur par défaut sera utilisée si aucune valeur n'est setté). */
    @Input()
    public set viewPortRowHeight(value: number | string) {
        this.setViewPortRowHeight(value);
    }

    /**
     * Les valeurs acceptées en paramètre se trouvent dans l'enum ViewportMode (disabled, constant, variable ou auto)
     * Attention, une désactivation du viewport dégrade considérablement les performances de la liste et ne doit pas être activée si la liste
     * est suceptible de contenir beaucoup d'éléments.
     */
    @Input()
    public set viewportMode(mode: ViewportMode | string) {
        this.setViewportMode(mode);
    }

    /** Retourne le champ utilisé pour la liste des enfants d'un parent */
    @Input()
    public set childrenField(value: string) {
        super.setChildrenField(value);
    }

    /** Définit le champ utilisé pour la liste des enfants d'un parent */
    public get childrenField() {
        return this._childrenField;
    }

    /** Définit le champ à utiliser comme valeur d'affichage. */
    @Input()
    public set textField(value: string) {
        super.setTextField(value);
    }

    /** Définit le champ à utiliser comme valeur de comparaison. */
    @Input()
    public set valueField(value: string) {
        super.setValueField(value);
    }

    /** Définit le champ à utiliser comme champ de recherche.
     * Ce champ peut indiquer, un champ contenant une valeur, un texte indexé, ou une fonction.
     */
    @Input()
    public set searchField(value: string) {
        super.setSearchField(value);
    }

    /** Retourne le champ à utiliser comme champ de recherche.
     * Ce champ peut indiquer, un champ contenant une valeur, un texte indexé, ou une fonction.
     */
    public get searchField() {
        return this._searchField;
    }

    /** Définit la hauteur maximum avant que le composant affiche une scrollbar
     * spécifier une grande valeur pour ne jamais afficher de scrollbar
     * Spécifier 0 pour que le composant determine sa hauteur à partir du container
     */
    @Input()
    public set maxHeight(value: number) {
        super.setMaxHeight(value);
    }

    /** Retourne la hauteur maximum avant que le composant affiche une scrollbar
     * spécifier une grande valeur pour ne jamais afficher de scrollbar
     * Spécifier 0 pour que le composant determine sa hauteur à partir du container
     */
    public get maxHeight() {
        return this.getMaxHeight();
    }

    /** Définit la ligne courant ou ligne active */
    @Input()
    public set currentItem(item: IItemBase) {
        super.setCurrentItem(item);
        if (item) {
            this.ensureItemVisible(item);
        }
    }

    /** Retourne la ligne courant ou ligne active */
    public get currentItem() {
        return super.getCurrentItem();
    }

    /** Retourne le nombre de niveau pour une liste hierarchique */
    public get depthMax() {
        return this._depthMax;
    }

    /** Définit une valeur indiquant si plusieurs lignes peuvent être sélectionées. */
    @Input()
    public set multiSelect(value: boolean | string) {
        super.setMultiSelect(coerceBooleanProperty(value));
    }

    /** Retourne une valeur indiquant si plusieurs lignes peuvent être sélectionées. */
    public get multiSelect() {
        return this._multiSelect;
    }

    /** Définit la liste des éléments selectionés en mode multiselect */
    @Input()
    public set selectedItems(value: IItemBase[]) {
        if (value !== undefined) {
            this.selectItems$.next(value);
        }
    }

    /** Retourne la liste des éléments selectionés en mode multiselect */
    public get selectedItems() {
        return super.getSelectedItems();
    }

    /** Définit l'élément selectioné en mode single select */
    @Input()
    public set selectedItem(value: IItemBase | string) {
        if (value !== undefined) {
            this.selectItems$.next(value);
        }
    }

    /** Retourne l'éléments selectioné en mode single select */
    public get selectedItem() {
        const selectedItem = super.getSelectedItems();
        return selectedItem && selectedItem[0];
    }

    /** Définit le model selectioné en mode single select */
    @Input()
    public set selectedModel(value: any) {
        if (value !== undefined) {
            this.writeValue(value);
        }
    }

    /** Retourne le model selectioné en mode single select */
    public get selectedModel() {
        const selectedModel = super.getSelectedModels();
        return selectedModel && selectedModel[0];
    }

    /** Définit la liste des models selectionés en mode multiselect */
    @Input()
    public set selectedModels(value: any[]) {
        if (value !== undefined) {
            this.writeValue(value);
        }
    }

    /** Retourne la liste des models selectionés en mode multiselect */
    public get selectedModels() {
        return super.getSelectedModels();
    }

    /** Definit le service de liste utilisé par ce composant. Ce srevice permet de controller dynamiquement la liste, ou de faire du lazyloading. */
    @Input()
    public set itemListService(itemListService: ItemListService) {
        if (itemListService !== undefined) {
            this.hasCustomService = true;
            this.setItemListService(itemListService);
            if (itemListService && itemListService.lastQuery) {
                this.query = itemListService.lastQuery.toString();
            }
        }
    }

    /** Retourne le service de liste utilisé par ce composant. Ce srevice permet de controller dynamiquement la liste, ou de faire du lazyloading. */
    public get itemListService() {
        return this.getItemListService();
    }

    /** Definit le service utilisé pour le tri de la liste */
    @Input()
    public set sortingService(value: SortingService) {
        this.setSortingService(value);
    }

    /** Definit le service utilisé pour le regroupement de la liste */
    @Input()
    public set groupingService(value: GroupingService) {
        this.setGroupingService(value);
    }

    /** Définit la liste des éléments */
    @Input()
    public set items(items: IItemBase[] | Promise<IItemBase[]> | Observable<IItemBase[]>) {
        delete this.hintLabel;
        super.setItems$(items).pipe(
            switchMap((itms) => {
                if (this.minSearchlength > 0 && !this.query) {
                    // Waiting for query
                    this._itemList = [];
                    this.changeDetectorRef.markForCheck();
                    return of(itms);
                } else {
                    return this.calcViewList$().pipe(map(() => itms));
                }
            }),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /**
     * Set a observable called before the list will be displayed
     */
    @Input()
    public set loadingItems(fn: (query: string | RegExp, selectedItems: IItemBase[]) => Observable<IItemBase[]>) {
        this.hasLoadingEvent = !!fn;
        super.setLoadingItems(fn);
    }

    /**
     * Set a promise or an observable called before an item selection
     */
    @Input()
    public set selectingItem(fn: (item: IItemBase) => Promise<IItemBase> | Observable<IItemBase>) {
        super.setSelectingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item deselection
     */
    @Input()
    public set unselectingItem(fn: (item: IItemBase) => Promise<IItemBase> | Observable<IItemBase>) {
        super.setUnselectingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item expand
     */
    @Input()
    public set expandingItem(fn: (item: IItemTree) => Promise<IItemTree> | Observable<IItemTree>) {
        super.setExpandingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item collapse
     */
    @Input()
    public set collapsingItem(fn: (item: IItemTree) => Promise<IItemTree> | Observable<IItemTree>) {
        super.setCollapsingItem(fn);
    }

    /** Définit la liste des éléments (tout type d'objet métier) */
    @Input()
    public set models(items: any[] | Observable<any[]>) {
        super.setModels$(items).pipe(
            first(),
            switchMap(() => this.calcViewList$()),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /** Permet de désactiver le select */
    @Input()
    public set disabled(value: boolean) {
        const disabled = coerceBooleanProperty(value);
        this._disabled = disabled || null;
        this.changeDetectorRef.markForCheck();
    }

    public get disabled() {
        return this._disabled;
    }

    /** Definit si le waiter doit être affiché dans la liste. */
    @Input()
    public set waiter(value: boolean) {
        if (value !== undefined) {
            this._waiter = value;
        }
    }

    /** Retourne si le waiter doit être affiché dans la liste. */
    public get waiter() { return this._waiter; }

    @ViewChild(DejaChildValidatorDirective)
    public set inputValidatorDirective(value: DejaChildValidatorDirective) {
        if (value) {
            value.parentControl = this.ngControl;
        }
    }

    public set currentItemIndex(value: number) {
        super.setCurrentItemIndex(value);
        this.changeDetectorRef.markForCheck();
    }

    public get currentItemIndex() {
        return this.getCurrentItemIndex();
    }

    public get itemTemplate() {
        return this.itemTemplateExternal || this.itemTemplateInternal;
    }

    public get parentItemTemplate() {
        return this.parentItemTemplateExternal || this.parentItemTemplateInternal;
    }

    public get loaderTemplate() {
        return this.loaderTemplateExternal || this.loaderTemplateInternal;
    }

    public get headerTemplate() {
        return this.headerTemplateExternal || this.headerTemplateInternal;
    }

    public get searchPrefixTemplate() {
        return this.searchPrefixTemplateExternal || this.searchPrefixTemplateInternal;
    }

    public get searchSuffixTemplate() {
        return this.searchSuffixTemplateExternal || this.searchSuffixTemplateInternal;
    }

    // ************* ControlValueAccessor Implementation **************
    public get value() {
        return this._multiSelect ? this.selectedItems : this.selectedItem;
    }

    public set value(val) {
        this.writeValue(val);
        this.onChangeCallback(val);
        this.onTouchedCallback();
        this.stateChanges.next();
    }

    public writeValue(value: any) {
        this.writeValue$.next(value);
    }

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }
    // ************* End of ControlValueAccessor Implementation **************

    public ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }

    public ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elementRef.nativeElement);
    }

    /** Change l'état d'expansion de toute les lignes parentes */
    public toggleAll$(collapsed?: boolean): Observable<IItemTree[]> {
        return super.toggleAll$(collapsed).pipe(
            switchMap((items) => this.calcViewList$().pipe(first(), map(() => items))));
    }

    /** Change l'état d'expansion de toute les lignes parentes */
    public toggleAll(collapsed?: boolean) {
        this.toggleAll$(collapsed).pipe(
            first(),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /** Positionne a scrollbar pour assurer que l'élément spécifié soit visible */
    public ensureItemVisible(item: IItemBase | number) {
        super.ensureItemVisible(item);
    }

    /** Efface le contenu de la liste */
    public clearViewPort() {
        super.clearViewPort();
    }

    public ngAfterContentInit() {
        if (!this.items && this.options?.length) {
            const selectedModels = [] as any[];
            this.valueField = 'value';
            this.textField = 'text';
            const models = this.options.map((option) => {
                const model = {
                    text: option.text,
                    value: option.value,
                };
                if (option.selected) {
                    selectedModels.push(model);
                }
                return model;
            });
            this.models = models;
            if (selectedModels.length) {
                this.selectedModels = selectedModels;
            }
            if (models.length > 100) {
                // tslint:disable-next-line:no-debugger
                debugger;
                console.error('Select options with more than 100 items can have performance options. Please bind directly the items in code behind with items or models input.');
            }
        }

        this.contentInitialized$.next(true);
    }

    public ngAfterViewInit() {
        // FIXME Issue angular/issues/6005
        // see http://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
        if (this._itemList.length === 0 && (this.hasCustomService || this.hasLoadingEvent)) {
            timer(1).pipe(
                first(),
                switchMap(() => this.calcViewList$()),
                takeUntil(this.destroyed$)
            ).subscribe();
        }

        fromEvent(this.listElement, 'scroll').pipe(
            map((event: any) => [event, event.target.scrollTop, event.target.scrollLeft]),
            map(([event, scrollTop, scrollLeft]: [Event, number, number]) => {
                const e = {
                    originalEvent: event,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                } as DejaTreeListScrollEvent;

                this.scroll.emit(e);
                return scrollTop;
            }),
            takeUntil(this.destroyed$)
        ).subscribe(scrollPos => this.viewPort.scrollPosition$.next(scrollPos));

        let keyDown$ = fromEvent(this.listElement, 'keydown') as Observable<KeyboardEvent>;
        if (this.input) {
            const inputKeyDown$ = fromEvent(this.input.nativeElement, 'keydown') as Observable<KeyboardEvent>;
            keyDown$ = merge(keyDown$, inputKeyDown$);
        }

        keyDown$.pipe(
            filter(() => !this.disabled),
            filter(event => {
                const keyCode = event.code;
                return keyCode === KeyCodes.Home ||
                    keyCode === KeyCodes.End ||
                    keyCode === KeyCodes.PageUp ||
                    keyCode === KeyCodes.PageDown ||
                    keyCode === KeyCodes.UpArrow ||
                    keyCode === KeyCodes.DownArrow ||
                    keyCode === KeyCodes.Space ||
                    keyCode === KeyCodes.Enter;
            }),
            switchMap(event => this.ensureListCaches$().pipe(map(() => event))),
            switchMap(event => {
                if (!this.rowsCount) {
                    return of(null);
                }

                // Set current item from index for keyboard features only
                const setCurrentIndex = (index: number) => {
                    this.currentItemIndex = index;
                    this.ensureItemVisible(this.currentItemIndex);
                    this.viewPort.refresh();
                };

                const currentIndex = this.rangeStartIndex >= 0 ? this.rangeStartIndex : this.rangeStartIndex = this.currentItemIndex;
                switch (event.code) {
                    case KeyCodes.Home:
                        setCurrentIndex(0);
                        if (event.shiftKey) {
                            return this.selectRange$(currentIndex, 0);
                        } else if (!event.ctrlKey) {
                            this.rangeStartIndex = 0;
                            return this.selectRange$(this.rangeStartIndex);
                        } else {
                            return of(-1);
                        }

                    case KeyCodes.End:
                        setCurrentIndex(this.rowsCount - 1);
                        if (event.shiftKey) {
                            return this.selectRange$(currentIndex, this.rowsCount - 1);
                        } else if (!event.ctrlKey) {
                            this.rangeStartIndex = this.rowsCount - 1;
                            return this.selectRange$(this.rangeStartIndex);
                        } else {
                            return of(-1);
                        }

                    case KeyCodes.PageUp:
                        const upindex = Math.max(0, this.currentItemIndex - this.pageSize);
                        setCurrentIndex(upindex);
                        if (event.shiftKey) {
                            return this.selectRange$(currentIndex, upindex);
                        } else if (!event.ctrlKey) {
                            this.rangeStartIndex = upindex;
                            return this.selectRange$(this.rangeStartIndex);
                        } else {
                            return of(-1);
                        }

                    case KeyCodes.PageDown:
                        const dindex = Math.min(this.rowsCount - 1, this.currentItemIndex + this.pageSize);
                        setCurrentIndex(dindex);
                        if (event.shiftKey) {
                            return this.selectRange$(currentIndex, dindex);
                        } else if (!event.ctrlKey) {
                            this.rangeStartIndex = dindex;
                            return this.selectRange$(this.rangeStartIndex);
                        } else {
                            return of(-1);
                        }

                    case KeyCodes.UpArrow:
                        const uaindex = Math.max(0, this.currentItemIndex - 1);
                        if (uaindex !== -1) {
                            setCurrentIndex(uaindex);
                            if (event.shiftKey) {
                                return this.selectRange$(currentIndex, uaindex);
                            } else if (!event.ctrlKey) {
                                this.rangeStartIndex = uaindex;
                                return this.selectRange$(this.rangeStartIndex);
                            }
                        }
                        return of(-1);

                    case KeyCodes.DownArrow:
                        const daindex = Math.min(this.rowsCount - 1, this.currentItemIndex + 1);
                        if (daindex !== -1) {
                            setCurrentIndex(daindex);
                            if (event.shiftKey) {
                                return this.selectRange$(currentIndex, daindex);
                            } else if (!event.ctrlKey) {
                                this.rangeStartIndex = daindex;
                                return this.selectRange$(this.rangeStartIndex);
                            }
                        }
                        return of(-1);

                    case KeyCodes.Space:
                        const target = event.target as HTMLElement;
                        if (target.tagName === 'INPUT' && !event.ctrlKey && !event.shiftKey) {
                            return of(null);
                        }

                        const sitem = this.currentItem as IItemTree;
                        if (sitem) {
                            if (this.isCollapsible(sitem)) {
                                return this.toggleCollapse$(currentIndex, !sitem.collapsed);
                            } else if (sitem.selected) {
                                return this.toggleSelect$([sitem], false);
                            } else if (this.multiSelect && event.ctrlKey) {
                                return this.toggleSelect$([sitem], !sitem.selected);
                            } else {
                                return this.unselectAll$().pipe(
                                    switchMap(() => this.toggleSelect$([sitem], true))
                                );
                            }
                        }
                        return of(-1);

                    case KeyCodes.Enter:
                        const eitem = this.currentItem as IItemTree;
                        if (eitem) {
                            if (this.isCollapsible(eitem)) {
                                return this.toggleCollapse$(currentIndex, !eitem.collapsed);
                            } else if (this.isSelectable(eitem)) {
                                return this.unselectAll$().pipe(
                                    switchMap(() => this.toggleSelect$([eitem], true)),
                                );
                            }
                        }
                        return of(-1);

                    default:
                        return of(null);
                }
            }),
            takeUntil(this.destroyed$)
        ).subscribe(continuePropagation => {
            if (continuePropagation !== null) {
                this.keyboardNavigation$.next();
                this.changeDetectorRef.markForCheck();
                event.preventDefault();
                return false;
            }
        });

        let keyUp$ = fromEvent(this.listElement, 'keyup') as Observable<KeyboardEvent>;
        if (this.input) {
            const inputKeyup$ = fromEvent(this.input.nativeElement, 'keyup') as Observable<KeyboardEvent>;
            const inputDrop$ = fromEvent(this.input.nativeElement, 'drop') as Observable<KeyboardEvent>;
            keyUp$ = merge(keyUp$, inputKeyup$, inputDrop$);
        }

        // Ensure list cache
        keyUp$.pipe(
            filter(() => !this.disabled),
            tap(() => {
                if ((this.query || '').length < this.minSearchlength) {
                    this._itemList = [];
                    return;
                }
            }),
            filter(event => {
                const keyCode = event.code;
                return keyCode >= KeyCodes.Key0 ||
                    keyCode === KeyCodes.Backspace ||
                    keyCode === KeyCodes.Space ||
                    keyCode === KeyCodes.Delete;
            }),
            switchMap(event => {
                if (!this.searchArea) {
                    if ((/[a-zA-Z0-9]/).test(event.key)) {
                        // Valid char
                        this.clearFilterExpression$.next(null);

                        // Search next
                        this.filterExpression += event.key;
                        const rg = new RegExp(`^${this.filterExpression}`, 'i');
                        return this.findNextMatch$((item) => {
                            if (item && this.isSelectable(item)) {
                                const label = this.getTextValue(item);
                                if (rg.test(label)) {
                                    return true;
                                }
                            }
                            event.preventDefault();
                            return false;
                        }, this.currentItemIndex);
                    }
                } else {
                    // Autocomplete, filter the list
                    this.keyboardNavigation$.next();
                }

                return of(null as IFindItemResult);
            }),
            filter(result => result?.index >= 0),
            takeUntil(this.destroyed$)
        ).subscribe(result => {
            // Set current item from index for keyboard features only
            this.currentItemIndex = result.index;
            this.ensureItemVisible(this.currentItemIndex);
        });

        this.viewPort.element$.next(this.listElement);
    }

    public setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    public onContainerClick(event: MouseEvent) {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elementRef.nativeElement.querySelector('input').focus();
        }
    }

    public mousedown(e: MouseEvent) {
        if (this.mouseUp$sub) {
            this.mouseUp$sub.unsubscribe();
            this.mouseUp$sub = undefined;
        }

        if (this.disabled) {
            return undefined;
        }

        const target = e.target as HTMLElement;
        const itemIndex = this.getItemIndexFromHTMLElement(target);
        if (itemIndex === undefined) {
            return undefined;
        }

        const isExpandButton = (el: HTMLElement) => {
            return el.id === 'expandbtn' || el.parentElement.id === 'expandbtn';
        };

        const item = this._itemList[itemIndex - this.vpStartRow];
        this.clickedItem = item;

        if ((!isExpandButton(target) || !this.isCollapsible(item)) && this.isSelectable(item) && (!e.ctrlKey || !this.multiSelect) && (e.button === 0 || !item.selected)) {
            if (e.shiftKey && this.multiSelect) {
                // Select all from current to clicked
                this.selectRange$(itemIndex, this.currentItemIndex).pipe(
                    first(),
                    takeUntil(this.destroyed$)
                ).subscribe(() => this.changeDetectorRef.markForCheck());
                return false;
            } else if (!e.ctrlKey) {
                if (!this.multiSelect && item.selected) {
                    return undefined;
                }

                this.unselectAll$().pipe(
                    take(1),
                    switchMap(() => {
                        this.currentItemIndex = itemIndex;
                        return this.toggleSelect$([item], true);
                    }),
                    take(1),
                    takeUntil(this.destroyed$)
                ).subscribe(() => this.changeDetectorRef.markForCheck());
            }
        }

        this.mouseUp$sub = fromEvent(this.listElement, 'mouseup').pipe(
            first(),
            filter(() => !this.disabled),
            switchMap((upevt: MouseEvent) => {
                // Because .first()
                this.mouseUp$sub = undefined;

                const upTarget = upevt.target as HTMLElement;
                const upIndex = this.getItemIndexFromHTMLElement(upTarget);
                if (upIndex === undefined) {
                    return of(null);
                }

                const upItem = this._itemList[upIndex - this.vpStartRow];
                if (this.clickedItem && upItem !== this.clickedItem) {
                    return of(null);
                }

                if (upevt.shiftKey) {
                    return of(null);
                }

                if (upevt.button !== 0) {
                    // Right click menu
                    return of(null);
                }

                if (this.isCollapsible(upItem) && (isExpandButton(upTarget) || !this.isSelectable(upItem))) {
                    const treeItem = upItem as IItemTree;
                    return this.toggleCollapse$(upIndex, !treeItem.collapsed).pipe(
                        map(() => upIndex)
                    );

                } else if (upevt.ctrlKey) {
                    if (this.multiSelect) {
                        return this.toggleSelect$([upItem], !upItem.selected).pipe(
                            map(() => upIndex)
                        );
                    } else {
                        const o = this.selectedItem && this.selectedItem !== upItem ? this.toggleSelect$([this.selectedItem], false).pipe(switchMap(() => this.toggleSelect$([upItem], true))) : this.toggleSelect$([upItem], !upItem.selected);
                        return o.pipe(
                            map(() => upIndex)
                        );
                    }
                }

                this.rangeStartIndex = -1;
                return of(null);
            }),
            filter(currentIndex => currentIndex !== null),
            takeUntil(this.destroyed$),
        ).subscribe(currentIndex => {
            this.currentItemIndex = currentIndex;
            this.changeDetectorRef.markForCheck();
        });
    }

    public getDragContext(index: number) {
        if (!this.clipboardService || (!this.sortable && !this.itemsDraggable)) {
            return null;
        }

        return {
            dragendcallback: (event: IDejaDragEvent) => {
                this.itemDragEnd.emit(event);
                delete this._ddStartIndex;
                delete this._ddTargetIndex;
                this.calcViewList$().pipe(
                    first(),
                    takeUntil(this.destroyed$)
                ).subscribe(); // Comment this line to debug dragdrop
            },
            dragstartcallback: (event: IDejaDragEvent) => {
                const targetIndex = this.getItemIndexFromHTMLElement(event.target as HTMLElement);
                if (targetIndex === undefined) {
                    return;
                }
                this._ddStartIndex = index;
                event.dragObject = this._itemList[targetIndex - this.vpStartRow];
                this.itemDragStart.emit(event);
            },
            object: {
                index: index,
            },
        };
    }

    public getDropContext() {
        if (!this.clipboardService || !this.sortable) {
            return null;
        }

        const dragcallback = (event: IDejaDragEvent) => {
            if (this._ddStartIndex === undefined) {
                return;
            }

            const targetIndex = this.getItemIndexFromHTMLElement(event.target as HTMLElement);
            if (targetIndex === undefined) {
                return;
            }

            // Faire calculer le target final en fonction de la hierarchie par le service
            this.calcDragTargetIndex$(this._ddStartIndex, targetIndex).pipe(
                switchMap((finalTarget) => {
                    if (finalTarget !== undefined && finalTarget !== this._ddTargetIndex) {
                        this._ddTargetIndex = finalTarget;
                        return this.calcViewList$().pipe(
                            first(),
                            map(() => finalTarget));
                    } else {
                        return of(finalTarget);
                    }
                }),
                takeUntil(this.destroyed$)
            ).subscribe();

            event.preventDefault();
            return;
        };

        return {
            dragentercallback: dragcallback,
            dragovercallback: dragcallback,
            dropcallback: (event: IDejaDragEvent) => {
                delete this._ddStartIndex;
                delete this._ddTargetIndex;
                this.drop$().pipe(
                    switchMap(() => this.calcViewList$().pipe(first())),
                    takeUntil(this.destroyed$)
                ).subscribe();
                event.preventDefault();
            },
        };
    }

    public dragLeave(event: DragEvent) {
        const listRect = this.listElement.getBoundingClientRect();

        const listBounds = Rect.fromLTRB(listRect.left,
            listRect.top,
            listRect.right,
            listRect.bottom);

        if (!listBounds.containsPoint(new Position(event.pageX, event.pageY))) {
            this._ddTargetIndex = this._ddStartIndex;
            this.calcViewList$().pipe(
                first(),
                takeUntil(this.destroyed$)
            ).subscribe();
        }
    }

    public onSelectionChange() {
        let outputEmitter = null;

        let output = null;

        if (this.multiSelect) {
            const models = this.selectedModels;

            outputEmitter = {
                items: this.selectedItems,
                models: models,
            } as DejaItemsEvent;

            if (this.modelIsValue) {
                const valueField = this.getValueField();
                if (models.find((m) => !!m[valueField])) {
                    output = models.map((m) => m[valueField] !== undefined ? m[valueField] : m);
                }
            } else {
                output = models;
            }
        } else {
            const model = this.selectedModel;

            outputEmitter = {
                item: this.selectedItems[0],
                model: model,
            } as DejaItemEvent;

            if (this.modelIsValue) {
                const valueField = this.getValueField();
                output = model[valueField] !== undefined ? model[valueField] : model;
            } else {
                output = model;
            }
        }

        this.onChangeCallback(output);
        this.selectedChange.emit(outputEmitter);
    }

    public selectRange$(indexFrom: number, indexTo?: number): Observable<number> {
        return super.selectRange$(indexFrom, indexTo).pipe(tap((selectedCount) => {
            if (selectedCount) {
                // Raise event
                this.onSelectionChange();
            }
            return selectedCount;
        }), tap(() => this.changeDetectorRef.markForCheck()));
    }

    public toggleSelect$(items: IItemBase[], state: boolean): Observable<IItemBase[]> {
        if (!this._multiSelect && !items[0].selected === !state) {
            return of(items);
        } else {
            return super.toggleSelect$(items, state).pipe(
                tap(() => {
                    // Raise event
                    this.onSelectionChange();
                }));
        }
    }

    public calcViewList$(): Observable<IViewListResult> {
        return super.calcViewList$(this.query).pipe(
            tap(() => this.changeDetectorRef.markForCheck()));
    }

    public getItemClass(item: IItemTree) {
        const classNames = ['listitem'] as string[];
        if (item.className) {
            classNames.push(item.className);
        }
        if (item.collapsing || item.expanding) {
            classNames.push('hide');
        }
        if (item.depth < this.depthMax) {
            classNames.push('parent');
        }
        if (item.collapsed) {
            classNames.push('collapsed');
        }
        if (item.selected) {
            classNames.push('selected');
        }
        if (item.selectable === false) {
            classNames.push('unselectable');
        }
        if (item.depth === this._depthMax && item.odd) {
            classNames.push('odd');
        }
        return classNames.join(' ');
    }

    public updateErrorState() {
        const oldState = this.errorState;
        const parent = this._parentFormGroup || this._parentForm;
        const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        const control = this.ngControl ? this.ngControl.control as FormControl : null;
        const newState = matcher.isErrorState(control, parent);

        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    }
}
