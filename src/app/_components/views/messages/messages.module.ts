import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ],
  providers: [
    ApiService,
    DataService
  ]
})
export class MessagesModule { }
