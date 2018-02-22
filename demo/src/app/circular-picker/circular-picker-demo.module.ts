import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DejaCircularPickerModule } from '@deja-js/component';
import { DejaMarkdownModule } from '../../component/markdown/index';
import { DejaCircularPickerDemoComponent } from './circular-picker-demo';
import { routing } from './circular-picker-demo.routes';

@NgModule({
    declarations: [DejaCircularPickerDemoComponent],
    exports: [DejaCircularPickerDemoComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        DejaCircularPickerModule,
        DejaMarkdownModule,
        routing,
    ],
    providers: [
    ],
})
export class DejaCircularPickerDemoModule { }
