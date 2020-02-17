import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { SharedModule } from '../../../_modules/shared/shared.module';
import { ApiService } from '../../../_services/api/api.service';
import { DataService } from '../../../_services/data/data.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ],
  providers: [
    ApiService,
    DataService
  ]
})
export class IndexModule { }
