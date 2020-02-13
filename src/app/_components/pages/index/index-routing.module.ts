import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      { path: '', loadChildren: () => import('../../views/landing-page/landing-page.module').then(m => m.LandingPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
