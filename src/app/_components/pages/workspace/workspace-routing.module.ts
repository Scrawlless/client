import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  {
    path: '', component: WorkspaceComponent,
    children: [
      { path: '', loadChildren: () => import('../../workspace/field/field.module').then(m => m.FieldModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }