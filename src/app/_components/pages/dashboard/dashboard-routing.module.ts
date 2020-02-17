import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('../../views/landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'tasks', loadChildren: () => import('../../views/tasks/tasks.module').then(m => m.TasksModule) },
      { path: 'friends', loadChildren: () => import('../../views/friends/friends.module').then(m => m.FriendsModule) },
      { path: 'messages', loadChildren: () => import('../../views/messages/messages.module').then(m => m.MessagesModule) },
      { path: 'profile', loadChildren: () => import('../../views/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'settings', loadChildren: () => import('../../views/settings/settings.module').then(m => m.SettingsModule) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
