import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule,
    MatListModule
  ]
})
export class MessagesModule { }
