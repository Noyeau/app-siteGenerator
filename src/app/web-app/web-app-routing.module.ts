import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAppComponent } from './web-app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewEventPage } from './pages/new-event/new-event.page';
import { MyAccountPage } from './pages/my-account/my-account.page';

const routes: Routes = [
  {
    path: '',
    component: WebAppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'new-event',
        component: NewEventPage
      },
      {
        path: 'my-account',
        component: MyAccountPage
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule { }
