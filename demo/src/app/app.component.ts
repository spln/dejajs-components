/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { IconService } from '@deja-js/component';
import { BehaviorSubject, from as observableFrom, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
    public version: string;
    private _theme: string;
    private theme$: BehaviorSubject<string>;
    private isAlive = true;

    constructor(iconService: IconService) {
        try {
            this._theme = localStorage.getItem('dejajs-demo-color');
        } catch (_e) {
            console.log('Fail to get your prefered color from the local storage.');
        }

        if (!this._theme) {
            this._theme = 'blue';
        }
        this.theme$ = new BehaviorSubject<any>(this._theme);
        observableFrom(this.theme$).pipe(
            takeWhile(() => this.isAlive))
            .subscribe((theme) => document.body.setAttribute('theme', theme));

        iconService.addSvgIcon('angular', 'assets/img/logo/angular.svg');
        iconService.useMaterialIcons(false);
    }

    public get theme() {
        return this._theme;
    }

    public set theme(theme: string) {
        this._theme = theme;
        try {
            localStorage.setItem('dejajs-demo-color', theme);
        } catch (_e) {
            console.log('Fail to set your prefered color to the local storage.');
        }

        this.theme$.next(theme);
    }

    public ngOnDestroy() {
        this.isAlive = false;
    }
}
