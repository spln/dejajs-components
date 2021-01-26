/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Destroy } from '@deja-js/component/core';
import { GroupingService } from '@deja-js/component/core';
import { IGroupInfo } from '@deja-js/component/core';
import { IItemTree } from '@deja-js/component/core';
import { IViewPortItem } from '@deja-js/component/core';
import { DejaGridComponent, IDejaGridColumn, IDejaGridColumnSizeEvent, IDejaGridRow } from '@deja-js/component/data-grid';
import { IDejaDragContext, IDejaDropContext, IDejaDropEvent } from '@deja-js/component/dragdrop';
import { cloneDeep } from 'lodash-es';
import { from, Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, map, reduce, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { News } from '../common/news.model';
import { NewsService } from '../services/news.service';
import { PeopleService, Person } from '../services/people.service';
import { IExtendedViewPortItem } from '../tree-list/tree-list-demo';

interface PersonRow extends IDejaGridRow<unknown> {
    p1: {
        p2: {
            person: Person;
        };
    };
}

interface Fruct extends IDejaGridRow<unknown> {
    name: string;
    value: string;
    color: string;
    Potassium: string;
    Phosphorus: string;
    Magnesium: string;
    Calcium: string;
    Iron: string;
    Selenium: string;
    Manganese: string;
    Copper: string;
    Zinc: string;
    VitaminA: string;
    VitaminB1: string;
    VitaminB2: string;
    Niacin: string;
    Folate: string;
    PantothenicAcid: string;
    VitaminB6: string;
    VitaminC: string;
    VitaminE: string;
    VitaminK: string;
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'grid-demo',
    styleUrls: ['./grid-demo.scss'],
    templateUrl: './grid-demo.html'
})
export class DejaGridDemoComponent extends Destroy {
    public tabIndex = 1;
    public fructsForMultiSelection: IDejaGridRow<unknown>[];
    public fructsWithPreSelection: IDejaGridRow<unknown>[];
    public people$: Observable<Person[]>;
    public peopleForMultiselect$: Observable<Person[]>;
    public groupedByGenderPerson$: Observable<Person[]>;
    public variableHeightPersonRows$: Observable<PersonRow[]>;
    public groupedByEyesColorPeople$: Observable<Person[]>;
    public groupedByColorPeople: {
        items: Person[];
        toString(): string;
    }[];

    public onDemandGroupedPeople: IPeopleGroup[];
    public news$: Observable<News[]>;
    public dialogResponse$: Subject<string> = new Subject<string>();
    public bigNews$: Observable<News[]>;
    public bigPeople$: Observable<Person[]>;
    public columnGroups = [] as IDejaGridColumn[];
    public peopleRows = [] as Person[];
    public draggedPerson: Person;

    public viewPortInfos: {
        name: string;
        value: string;
    }[];

    public viewPortInfos$: Subscription;

    private _dialogVisible = false;

    @ViewChild('onexpand') private onExpandGrid: DejaGridComponent;

    public fructs = [
        {
            name: 'Peach',
            value: 'peach',
            color: '#FF6F00',
            Potassium: '285 mg',
            Phosphorus: '30 mg',
            Magnesium: '14 mg',
            Calcium: '9 mg',
            Iron: '0.38 mg',
            Selenium: '0.1 mcg',
            Manganese: '0.091 mg',
            Copper: '0.102 mg',
            Zinc: '0.26 mg',
            VitaminA: '489 IU',
            VitaminB1: '0.036 mg',
            VitaminB2: '0.047 mg',
            Niacin: '1.209 mg',
            Folate: '6 mcg',
            PantothenicAcid: '0.229 mg',
            VitaminB6: '0.037 mg',
            VitaminC: '9.9 mg',
            VitaminE: '1.09 mg',
            VitaminK: '3.9 mcg'
        },
        {
            name: 'Banana',
            value: 'banana',
            color: '#FFEB3B',
            Potassium: '422 mg',
            Phosphorus: '26 mg',
            Magnesium: '32 mg',
            Calcium: '6 mg',
            Sodium: '1 mg',
            Iron: '0.31 mg',
            Selenium: '1.2 mcg',
            Manganese: '0.319 mg',
            Copper: '0.092 mg',
            Zinc: '0.18 mg',
            VitaminA: '76 IU',
            VitaminB1: '0.037 mg',
            VitaminB2: '0.086 mg',
            Niacin: '0.785 mg',
            Folate: '24 mcg',
            PantothenicAcid: '0.394 mg',
            VitaminB6: '0.433 mg',
            VitaminC: '10.3 mg',
            VitaminE: '0.12 mg',
            VitaminK: '0.6 mcg'
        },
        {
            name: 'Cantaloupe',
            value: 'cantaloupe',
            color: '#AED581',
            Potassium: '184 mg',
            Phosphorus: '10 mg',
            Magnesium: '8 mg',
            Calcium: '6 mg',
            Sodium: '11 mg',
            Iron: '0.14 mg',
            Selenium: '0.3 mcg',
            Manganese: '0.028 mg',
            Copper: '0.028 mg',
            Zinc: '0.12 mg',
            VitaminA: '2334 IU',
            VitaminB1: '0.028 mg',
            VitaminB2: '0.013 mg',
            Niacin: '0.506 mg',
            Folate: '14 mcg',
            PantothenicAcid: '0.072 mg',
            VitaminB6: '0.05 mg',
            VitaminC: '25.3 mg',
            VitaminE: '0.03 mg',
            VitaminK: '1.7 mcg    '
        },
        {
            name: 'Cherries',
            value: 'cherries',
            color: '#880E4F',
            Potassium: '306 mg',
            Phosphorus: '29 mg',
            Magnesium: '15 mg',
            Calcium: '18 mg',
            Iron: '0.5 mg',
            Zinc: '0.1 mg',
            Manganese: '0.097 mg',
            Copper: '0.083 mg    ',
            VitaminA: '88 IU',
            VitaminB1: '0.037 mg',
            VitaminB2: '0.046 mg',
            Niacin: '0.213 mg',
            Folate: '6 mcg',
            PantothenicAcid: '0.275 mg',
            VitaminB6: '0.068 mg',
            VitaminC: '9.7 mg',
            VitaminE: '0.1 mg',
            VitaminK: '2.9 mcg'
        },
        {
            name: 'Chinese Pears',
            value: 'chinesepears',
            color: '#F5F5F5',
            Potassium: '333 mg',
            Phosphorus: '30 mg',
            Magnesium: '22 mg',
            Calcium: '11 mg',
            Selenium: '0.3 mcg',
            Manganese: '0.165 mg',
            Copper: '0.138 mg',
            Zinc: '0.06 mg',
            VitaminA: '0 mg',
            VitaminB1: '0.025 mg',
            VitaminB2: '0.028 mg',
            Niacin: '0.602 mg',
            Folate: '22 mcg',
            PantothenicAcid: '0.193 mg',
            VitaminB6: '0.06 mg',
            VitaminC: '10.4 mg',
            VitaminE: '0.33 mg',
            VitaminK: '12.4 mcg'
        },
        {
            name: 'Cranberries',
            value: 'cranberries',
            color: '#C2185B',
            Potassium: '85 mg',
            Phosphorus: '13 mg',
            Magnesium: '6 mg',
            Calcium: '8 mg',
            Sodium: '2 mg',
            Iron: '0.25 mg',
            Selenium: '0.1 mcg',
            Manganese: '0.36 mg',
            Copper: '0.061 mg',
            Zinc: '0.1 mg',
            VitaminA: '60 IU',
            VitaminB1: '0.012 mg',
            VitaminB2: '0.02 mg',
            Niacin: '0.101 mg',
            Folate: '1 mcg',
            PantothenicAcid: '0.295 mg',
            VitaminB6: '0.057 mg',
            VitaminC: '13.3 mg',
            VitaminE: '1.2 mg',
            VitaminK: '5.1 mcg'
        },
        {
            name: 'Guava',
            value: 'guava',
            color: '#FFCA28',
            Potassium: '688 mg',
            Phosphorus: '66 mg',
            Magnesium: '36 mg',
            Calcium: '30 mg',
            Sodium: '3 mg',
            Iron: '0.43 mg',
            Selenium: '1 mcg',
            Manganese: '0.247 mg',
            Copper: '0.38 mg',
            Zinc: '0.38 mg',
            VitaminA: '1030 IU',
            VitaminB1: '0.111 mg',
            VitaminB2: '0.066 mg',
            Niacin: '1.789 mg',
            Folate: '81 mcg',
            PantothenicAcid: '0.744 mg',
            VitaminB6: '0.181 mg',
            VitaminC: '376.7 mg',
            VitaminE: '1.2 mg',
            VitaminK: '4.3 mcg'
        },
        {
            name: 'Grapes',
            value: 'grapes',
            color: '#303F9F',
            Potassium: '288 mg',
            Phosphorus: '30 mg',
            Magnesium: '11 mg',
            Calcium: '15 mg',
            Sodium: '3 mg',
            Iron: '0.54 mg',
            Selenium: '0.2 mcg',
            Manganese: '0.107 mg',
            Copper: '0.192 mg',
            Zinc: '0.11 mg',
            VitaminA: '100 IU',
            VitaminB1: '0.104 mg',
            VitaminB2: '0.106 mg',
            Niacin: '0.284 mg',
            Folate: '3 mcg',
            PantothenicAcid: '0.076 mg',
            VitaminB6: '0.13 mg',
            VitaminC: '16.3 mg',
            VitaminE: '0.29 mg',
            VitaminK: '22 mcg'
        },
        {
            name: 'Lemon',
            value: 'lemon',
            color: '#FFF176',
            Potassium: '116 mg',
            Phosphorus: '13 mg',
            Magnesium: '7 mg',
            Calcium: '22 mg',
            Sodium: '2 mg',
            Iron: '0.5 mg',
            Selenium: '0.3 mcg',
            Manganese: '0.025 mg',
            Copper: '0.031 mg',
            Zinc: '0.05 mg',
            VitaminA: '18 IU',
            VitaminB1: '0.034 mg',
            VitaminB2: '0.017 mg',
            Niacin: '0.084 mg',
            Folate: '9 mcg',
            PantothenicAcid: '0.16 mg',
            VitaminB6: '0.067 mg',
            VitaminC: '44.5 mg',
            VitaminE: '0.13 mg'
        },
        {
            name: 'Mango',
            value: 'mango',
            color: '#FBC02D',
            Potassium: '323 mg',
            Phosphorus: '23 mg',
            Magnesium: '19 mg',
            Calcium: '21 mg',
            Sodium: '4 mg',
            Iron: '0.27 mg',
            Selenium: '1.2 mcg',
            Manganese: '0.056 mg',
            Copper: '0.228 mg',
            Zinc: '0.08 mg',
            VitaminA: '1584 IU',
            VitaminB1: '0.12 mg',
            VitaminB2: '0.118 mg',
            Niacin: '1.209 mg',
            Folate: '29 mcg',
            PantothenicAcid: '0.331 mg',
            VitaminB6: '0.227 mg',
            VitaminC: '57.3 mg',
            VitaminE: '2.32 mg',
            VitaminK: '8.7 mcg'
        },
        {
            name: 'Pineapple',
            value: 'pineapple',
            color: '#FDD835',
            Potassium: '180 mg',
            Phosphorus: '13 mg',
            Magnesium: '20 mg',
            Calcium: '21 mg',
            Sodium: '2 mg',
            Iron: '0.48 mg',
            Selenium: '0.2 mcg',
            Manganese: '1.53 mg',
            Copper: '0.181 mg',
            Zinc: '0.2 mg',
            VitaminA: '96 IU',
            VitaminB1: '0.13 mg',
            VitaminB2: '0.053 mg',
            Niacin: '0.825 mg',
            Folate: '30 mcg',
            PantothenicAcid: '0.351 mg',
            VitaminB6: '0.185 mg',
            VitaminC: '78.9 mg',
            VitaminE: '0.03 mg',
            VitaminK: '1.2 mcg'
        },
        {
            name: 'Watermelon',
            value: 'watermelon',
            color: '#E91E63',
            Potassium: '320 mg',
            Phosphorus: '31 mg',
            Magnesium: '29 mg',
            Calcium: '20 mg',
            Sodium: '3 mg',
            Iron: '0.69 mg',
            Selenium: '1.1 mcg',
            Manganese: '0.109 mg',
            Copper: '0.12 mg',
            Zinc: '0.29 mg',
            VitaminA: '1627 IU',
            VitaminB1: '0.094 mg',
            VitaminB2: '0.06 mg',
            Niacin: '0.509 mg',
            Folate: '9 mcg',
            PantothenicAcid: '0.632 mg',
            VitaminB6: '0.129 mg',
            VitaminC: '23.2 mg',
            VitaminE: '0.14 mg',
            VitaminK: '0.3 mcg'
        }
    ] as Fruct[];

    public fructsColumns = [
        {
            label: 'Color',
            name: 'color',
            width: '64px',
            useCellTemplate: true
        },
        {
            label: 'Name',
            name: 'name',
            width: '130px'
        },
        {
            label: 'Vitamin A',
            name: 'VitaminA'
        },
        {
            label: 'Vitamin B1',
            name: 'VitaminB1'
        },
        {
            label: 'Vitamin B2',
            name: 'VitaminB2'
        },
        {
            label: 'Vitamin C',
            name: 'VitaminC'
        }
    ] as IDejaGridColumn[];

    public peopleColumns = [
        {
            label: 'Name',
            name: 'name',
            width: '130px'
        },
        {
            label: 'Gender',
            name: 'gender',
            width: '70px'
        },
        {
            label: 'Company',
            name: 'company',
            width: '85px'
        },
        {
            label: 'Email',
            name: 'email',
            width: '210px'
        },
        {
            label: 'Phone',
            name: 'phone',
            width: '130px'
        },
        {
            label: 'Eyes Color',
            name: 'eyeColor',
            width: '85px'
        },
        {
            label: 'Address',
            name: 'address',
            width: '360px'
        },
        {
            label: 'About',
            name: 'about',
            width: '1000px'
        }
    ] as IDejaGridColumn[];

    public peopleColumnsEx: IDejaGridColumn[];
    public variableHeightPeopleColumns: IDejaGridColumn[];

    public newsColumns = [
        {
            label: 'Logo',
            name: 'urlToImage',
            minWidth: 64,
            sizeable: true,
            useCellTemplate: true,
            width: '150px'
        },
        {
            label: 'title',
            name: 'title',
            sizeable: true,
            useCellTemplate: false,
            width: '180px'
        },
        {
            label: 'description',
            name: 'description',
            minWidth: 64,
            sizeable: true,
            width: '450px'
        },
        {
            label: 'url',
            name: 'url',
            width: '200px'
        },
        {
            label: 'category',
            name: 'category',
            width: '100px'
        },
        {
            label: 'language',
            name: 'language',
            width: '64px'
        },
        {
            label: 'country',
            name: 'country',
            width: '64px'
        }
    ] as IDejaGridColumn[];

    public percentPeopleColumns = [
        {
            label: 'Name',
            name: 'name',
            width: '130px',
            sizeable: false
        },
        {
            label: 'Gender',
            name: 'gender',
            width: '70px',
            sizeable: true
        },
        {
            label: 'Company',
            name: 'company',
            width: '4.5%'
        },
        {
            label: 'Email',
            name: 'email',
            width: '6%'
        },
        {
            label: 'Phone',
            name: 'phone',
            width: '7%'
        },
        {
            label: 'Eyes Color',
            name: 'eyeColor',
            width: '4.5%'
        },
        {
            label: 'Address',
            name: 'address',
            width: '19%'
        },
        {
            label: 'About',
            name: 'about',
            width: '54%'
        }
    ] as IDejaGridColumn[];

    public responsivePeopleColumns = [
        {
            label: 'Name',
            name: 'name',
            width: '130px',
            sizeable: false,
            minWidth: 64
        },
        {
            label: 'Gender',
            name: 'gender',
            width: '70px',
            sizeable: true,
            responsive: 1
        },
        {
            label: 'Company',
            name: 'company',
            width: '4.5%',
            minWidth: 64,
            responsive: 3
        },
        {
            label: 'Email',
            name: 'email',
            width: '6%',
            minWidth: 64
        },
        {
            label: 'Phone',
            name: 'phone',
            width: '7%',
            minWidth: 64
        },
        {
            label: 'Eyes Color',
            name: 'eyeColor',
            width: '4.5%',
            minWidth: 64,
            responsive: 3
        },
        {
            label: 'Address',
            name: 'address',
            width: '19%',
            minWidth: 64,
            responsive: 2
        },
        {
            label: 'About',
            name: 'about',
            width: '54%',
            minWidth: 64,
            responsive: 4
        }
    ] as IDejaGridColumn[];

    public set dialogVisible(value: boolean) {
        this._dialogVisible = value;
        this.changeDetectorRef.markForCheck();
    }

    public get dialogVisible(): boolean {
        return this._dialogVisible;
    }

    @ViewChild('bigPeople')
    public set bigCountriesList(grid: DejaGridComponent) {
        if (this.viewPortInfos$) {
            this.viewPortInfos$.unsubscribe();
            this.viewPortInfos = [];
            delete this.viewPortInfos$;
        }

        this.viewPortInfos$ = grid?.viewPort.viewPort$.pipe(
            debounceTime(1),
            takeUntil(this.destroyed$)
        ).subscribe(viewPort => {
            this.viewPortInfos = [
                { name: 'beforeSize', value: String(viewPort.beforeSize) },
                { name: 'startIndex', value: String(viewPort.startIndex) },
                { name: 'viewPortSize', value: String(viewPort.viewPortSize) },
                { name: 'visibleCount', value: String(viewPort.visibleItems?.length) },
                { name: 'endIndex', value: String(viewPort.endIndex) },
                { name: 'afterSize', value: String(viewPort.afterSize) },
                { name: 'itemsCount', value: String(viewPort.items?.length) }
            ];
        });
    }

    public constructor(private changeDetectorRef: ChangeDetectorRef, private peopleService: PeopleService, newsService: NewsService, groupingService: GroupingService) {
        super();
        this.news$ = newsService.getNews$(50);
        this.bigNews$ = newsService.getNews$(10000);
        this.people$ = peopleService.getPeople$();
        this.bigPeople$ = peopleService.getPeople$(undefined, 100000);

        this.peopleForMultiselect$ = peopleService.getPeople$().pipe(map(people => cloneDeep(people)));
        this.groupedByGenderPerson$ = peopleService.getPeople$().pipe(
            switchMap(people => groupingService.group$(people, {
                groupByField: 'gender'
            } as IGroupInfo)));

        this.groupedByEyesColorPeople$ = peopleService.getPeople$().pipe(
            switchMap(people => groupingService.group$(people, {
                groupByField: 'eyeColor'
            } as IGroupInfo)));

        peopleService.getPeople$().pipe(
            tap(items => this.peopleRows = items),
            switchMap(people => groupingService.group$(people, {
                groupByField: 'color'
            } as IGroupInfo)),
            take(1),
            takeUntil(this.destroyed$)
        ).subscribe(items => {
            this.groupedByColorPeople = items;
        });

        this.peopleColumnsEx = [
            ...[{
                label: 'Color',
                name: 'color',
                width: '64px',
                useCellTemplate: true
            } as IDejaGridColumn],
            ...this.peopleColumns
        ];

        this.variableHeightPeopleColumns = this.peopleColumns.map(column => ({
            label: column.label,
            width: column.width,
            name: `p1.p2.person.${column.name}`,
            sizeable: column.name === 'address' || column.name === 'about'
        } as IDejaGridColumn));

        const addressCol = this.variableHeightPeopleColumns.find(column => column.name === 'p1.p2.person.address');
        addressCol.sizeable = true;
        addressCol.width = '250px';

        const aboutCol = this.variableHeightPeopleColumns.find(column => column.name === 'p1.p2.person.about');
        aboutCol.sizeable = true;
        aboutCol.width = '400px';

        this.variableHeightPersonRows$ = peopleService.getPeople$().pipe(
            map(person => cloneDeep(person)),
            switchMap(person => person),
            map(person => ({
                p1: {
                    p2: {
                        person: person
                    }
                }
            } as PersonRow)),
            reduce((acc, cur) => [...acc, cur], [] as PersonRow[])
        );

        this.peopleService.getPeople$().pipe(
            takeUntil(this.destroyed$)
        ).subscribe((value: Person[]) => {
            const onDemandResult = [] as IPeopleGroup[];
            const dic = {} as { [groupName: string]: IDejaGridRow<unknown>[] };
            value.forEach(person => {
                const groupName = `Group${person.color}`;
                if (!dic[groupName]) {
                    dic[groupName] = [];
                    onDemandResult.push({
                        color: person.color,
                        collapsible: true,
                        collapsed: true,
                        groupName: groupName,
                        rows: [{
                            displayName: 'loading...',
                            selectable: false
                        } as IDejaGridRow<unknown>],
                        displayName: groupName,
                        selectable: false,
                        loaded: false
                    } as IPeopleGroup);
                }

                dic[groupName].push({
                    model: person
                } as IDejaGridRow<unknown>);
            });

            this.onDemandGroupedPeople = onDemandResult;
        });

        this.fructsForMultiSelection = this.fructs
            .map(fruct => cloneDeep(fruct));

        this.fructsWithPreSelection = this.fructs
            .map(fruct => {
                const f = cloneDeep(fruct) as IItemTree<unknown>;
                f.selected = fruct.value === 'banana';
                return f;
            });
    }

    public onColumnSizeChanged(e: IDejaGridColumnSizeEvent, grid: DejaGridComponent): void {
        switch (e.column.name) {
            case 'description':
            case 'urlToImage':
            case 'address':
            case 'about':
            case 'p1.p2.person.address':
            case 'p1.p2.person.about':
                grid.clearRowsHeight();
                grid.refreshViewPort();
                break;
            default:
        }
    }

    public imageLoaded(item: IViewPortItem, grid: DejaGridComponent): void {
        const itemExt = item as IExtendedViewPortItem;
        if (!itemExt.loaded) {
            itemExt.loaded = true;
            grid.refreshViewPort(itemExt);
        }
    }

    public loadingRows(): (_query: string | RegExp, _selectedItems: IDejaGridRow<unknown>[]) => Observable<Person[]> {
        return (_query: string | RegExp, _selectedItems: IDejaGridRow<unknown>[]) => this.peopleService.getPeople$().pipe(delay(3000));
    }

    public collapsingRows() {
        return (row: IDejaGridRow<unknown>): Observable<IDejaGridRow<unknown>> => {
            const group = row as IPeopleGroup;
            return group.loaded ? of(row) : this.confirmDialog()(row);
        };
    }

    public expandingRows() {
        return (row: IDejaGridRow<unknown>): Observable<IDejaGridRow<unknown>> => {
            const group = row as IPeopleGroup;
            if (group.loaded) {
                return of(row);
            } else {
                return this.confirmDialog()(row).pipe(
                    switchMap(itm => {
                        if (!itm) {
                            return of(null as IDejaGridRow<unknown>);
                        }

                        of(group).pipe(
                            delay(2000),
                            take(1),
                            takeUntil(this.destroyed$)
                        ).subscribe(grp => {
                            // Simulate asynchronous load
                            const original = this.groupedByColorPeople.find(c => c.toString() === grp.color);
                            grp.rows = original.items.map(person => ({ model: person }));
                            grp.loaded = true;
                            grp.className = 'loaded';
                            this.onExpandGrid.refresh();
                        });

                        return of(itm);
                    })
                );
            }
        };
    }

    public confirmDialog() {
        return (row: IDejaGridRow<unknown>): Observable<IDejaGridRow<unknown>> => {
            this.dialogVisible = true;
            return from(this.dialogResponse$).pipe(
                take(1),
                map(response => {
                    this.dialogVisible = false;
                    return response === 'ok' ? row : null;
                })
            );
        };
    }

    public onFilterTemplateClicked(where: string): void {
        alert(`${where} clicked`);
    }

    public getParentRowDecr(row: IDejaGridRow<unknown>): string {
        return row.toString();
    }

    public getDragContext(row: IDejaGridRow<unknown>): IDejaDragContext {
        return {
            object: row
        } as IDejaDragContext;
    }

    public getDropContext(): IDejaDropContext {
        const drag = (event: IDejaDropEvent) => {
            const element = event?.dragInfo?.element as HTMLElement;
            if (element.tagName === 'DEJA-GRID-ROW') {
                event.preventDefault();
            }
        };

        return {
            dragentercallback: drag,
            dragovercallback: drag,
            dropcallback: (event: IDejaDropEvent) => {
                this.draggedPerson = event.dragInfo.object as Person;
                this.changeDetectorRef.markForCheck();
            }
        } as IDejaDropContext;
    }
}

interface IPeopleGroup extends IItemTree<unknown> {
    groupName: string;
    color: string;
    rows: IDejaGridRow<unknown>[];
    loaded?: boolean;
}
