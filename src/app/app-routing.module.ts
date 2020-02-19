import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardService } from './_services/guard/guard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./_components/pages/index/index.module').then(m => m.IndexModule), canActivate: [GuardService] },
  { path: 'dash', loadChildren: () => import('./_components/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
