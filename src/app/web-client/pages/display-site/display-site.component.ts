import { Component, OnInit, Input } from '@angular/core';
import { WebClientService } from '../../services/web-client.service';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-site',
  templateUrl: './display-site.component.html',
  styleUrls: ['./display-site.component.css']
})
export class DisplaySiteComponent implements OnInit {
  ready = false
  actualPageCode = 0

  @Input() set page(value) {
    console.log(value)
    this.actualPageCode = +value
  }
  siteClientParams


  constructor(
    private route: ActivatedRoute,
    private wcService: WebClientService
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.sitePage) {
        this.actualPageCode = params.sitePage
      }
    })

    this.wcService.webSiteParams.subscribe(res => {
      console.log(res)
      if (res) {
        this.siteClientParams = res
        this.ready = true
      }
    })
  }

  ngOnInit() { }


  getPage(pageIndex = this.actualPageCode) {
    let page = this.siteClientParams.pages.find(x => x.code == this.actualPageCode)
    return page
  }

}

