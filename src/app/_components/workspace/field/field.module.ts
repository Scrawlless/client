import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldRoutingModule } from './field-routing.module';
import { FieldComponent } from './field.component';

import { SharedModule } from '../../../_modules/shared/shared.module';

import { SafeHTML } from "../../../_pipes/safehtml.pipe";

import { ColumnCountDialogModule } from './../../dialogs/workspace-dialogs/column-count-dialog/column-count-dialog.module';
import { AlgebraComponent } from '../algebra/algebra.component';

@NgModule({
  declarations: [
    FieldComponent,
    AlgebraComponent,
    SafeHTML
  ],
  imports: [
    CommonModule,
    FieldRoutingModule,
    SharedModule,
    ColumnCountDialogModule
  ],
  providers: [
    AlgebraComponent
  ]
})
export class FieldModule { }
