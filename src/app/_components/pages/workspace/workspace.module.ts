import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';

import { SharedModule } from '../../../_modules/shared/shared.module';

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SharedModule
  ]
})
export class WorkspaceModule { }
