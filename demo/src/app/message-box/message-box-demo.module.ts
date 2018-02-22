import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DejaDialogModule, DejaMessageBoxModule, DejaTooltipModule } from '@deja-js/component';
import { DejaMarkdownModule } from '../../component/markdown/index';
import { DejaMessageBoxDemoComponent } from './message-box-demo';
import { routing } from './message-box-demo.routes';

@NgModule({
    declarations: [DejaMessageBoxDemoComponent],
    exports: [DejaMessageBoxDemoComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        DejaDialogModule,
        DejaMessageBoxModule,
        DejaMarkdownModule,
        DejaTooltipModule,
        routing,
    ],
    providers: [
    ],
})
export class DejaMessageBoxDemoModule { }
