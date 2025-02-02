/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

/**
 * Copy of private mixin https://github.com/angular/components/blob/master/src/material/input/input.ts
 * to make easier input forms.
 */

/* eslint-disable @typescript-eslint/naming-convention */
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { _Constructor, CanUpdateErrorState, ErrorStateMatcher, mixinErrorState } from '@angular/material/core';

export class MatInputBase {
    public constructor(
        public _defaultErrorStateMatcher: ErrorStateMatcher,
        public _parentForm: NgForm,
        public _parentFormGroup: FormGroupDirective,
        public ngControl: NgControl
    ) { }
}

export const _MatInputMixinBase: _Constructor<CanUpdateErrorState> & typeof MatInputBase = mixinErrorState(MatInputBase);
