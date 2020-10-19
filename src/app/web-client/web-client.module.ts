import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebClientRoutingModule } from './web-client-routing.module';
import { WcTextComponent } from './template-components/wc-text/wc-text.component';
import { WebClientComponent } from './web-client.component';
import { WcHeaderComponent } from './template-components/wc-header/wc-header.component';
import { SharedModule } from '../shared/shared.module';
import { BlocDisplayComponent } from './components/bloc-display/bloc-display.component';
import { WcImageComponent } from './template-components/wc-image/wc-image.component';
import { MenuComponent } from './components/menu/menu.component';
import { WebClientService } from './services/web-client.service';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { DisplaySiteComponent } from './pages/display-site/display-site.component';
import { InputRsvpComponent } from './components-rsvp/input-rsvp/input-rsvp.component';
import { SelectRsvpComponent } from './components-rsvp/select-rsvp/select-rsvp.component';
import { BlocDisplayRsvpComponent } from './components-rsvp/bloc-display-rsvp/bloc-display-rsvp.component';
import { WcTimelineComponent } from './template-components/wc-timeline/wc-timeline.component';
import { WcTimelineLineComponent } from './template-components/wc-timeline-line/wc-timeline-line.component';
import { WcCountersComponent } from './template-components/wc-counters/wc-counters.component';


@NgModule({
  declarations: [
    WcTextComponent,
    WebClientComponent,
    WcHeaderComponent,
    BlocDisplayComponent,
    WcImageComponent,
    MenuComponent,
    RsvpComponent,
    DisplaySiteComponent,
    InputRsvpComponent,
    SelectRsvpComponent,
    BlocDisplayRsvpComponent,
    WcTimelineComponent,
    WcTimelineLineComponent,
    WcCountersComponent
  ],
  providers:[
    WebClientService
  ],
  imports: [
    CommonModule,
    WebClientRoutingModule,
    SharedModule,
  ],
  exports:[
    MenuComponent
  ]
})
export class WebClientModule { }
