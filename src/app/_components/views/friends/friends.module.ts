import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { ApiService } from '../../../_services/api/api.service';

@NgModule({
  declarations: [FriendsComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule
  ],
  providers: [
    ApiService
  ]
})
export class FriendsModule { }
