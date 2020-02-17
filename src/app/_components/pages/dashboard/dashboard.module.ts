import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    ApiService,
    DataService
  ]
})
export class DashboardModule { }
