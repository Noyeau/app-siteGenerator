import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebClientComponent } from './web-client.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { DisplaySiteComponent } from './pages/display-site/display-site.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"error",
    pathMatch: "full"
  },
  {
    path: ":siteCode",
    component: WebClientComponent,
    children:[
      {
        path: 'rsvp',
        component: RsvpComponent
      },
      {
        path: ":sitePage",
        component: DisplaySiteComponent,
      },
    ]
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebClientRoutingModule { }
