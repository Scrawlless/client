import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@NgModule({
  declarations: [FriendsComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule
  ],
  providers: [
    ApiService,
    DataService
  ]
})
export class FriendsModule { }
