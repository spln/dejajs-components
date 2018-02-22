import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DejaEditableModule } from '@deja-js/component';
import { DejaMarkdownModule } from '../../component/markdown/index';
import { DejaContentEditableDemoComponent } from './content-editable-demo';
import { routing } from './content-editable-demo.routes';

@NgModule({
    declarations: [DejaContentEditableDemoComponent],
    exports: [DejaContentEditableDemoComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatTabsModule,
        MatToolbarModule,
        DejaEditableModule,
        DejaMarkdownModule,
        routing,
    ],
    providers: [
    ],
})
export class DejaContentEditableDemoModule { }
