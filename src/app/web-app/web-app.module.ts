import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { WebAppComponent } from './web-app.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NewEventPage } from './pages/new-event/new-event.page';
import { PageEditorComponent } from './components/page-editor/page-editor.component';
import { TextWcComponent } from './component-wc/text-wc/text-wc.component';
import { ImageWcComponent } from './component-wc/image-wc/image-wc.component';
import { TimelineWcComponent } from './component-wc/timeline-wc/timeline-wc.component';
import { CounterWcComponent } from './component-wc/counter-wc/counter-wc.component';
import { SiteEditorComponent } from './components/site-editor/site-editor.component';


@NgModule({
  declarations: [
    WebAppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    NewEventPage,
    PageEditorComponent,
    TextWcComponent,
    ImageWcComponent,
    TimelineWcComponent,
    CounterWcComponent,
    SiteEditorComponent
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    SharedModule
  ]
})
export class WebAppModule { }
