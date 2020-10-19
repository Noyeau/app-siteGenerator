import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebClientService } from './services/web-client.service';

@Component({
  selector: 'app-web-client',
  templateUrl: './web-client.component.html',
  styleUrls: ['./web-client.component.scss'],
})
export class WebClientComponent implements OnInit {
  ready = false
  page: string = "0"
  siteClientParams = null
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wcService: WebClientService
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.siteCode) {
        if (params.siteCode !== "error") {
          this.wcService.setClientWebSite(params.siteCode)
        } else {

        }
      }
      // if (params.sitePage) {
      //   this.page = params.sitePage
      // }

    })


    this.wcService.webSiteParams.subscribe(res => {
      console.log(res);
      if (res) {
        console.log(this.router.url)
        this.siteClientParams = res

        this.init()
      }
    })
  }



  init() {
    if (this.router.url.split('/').length == 3) {
      if (this.siteClientParams) {
        this.router.navigate([this.router.url + '/' + this.siteClientParams.pages[0].code])
      }

    }
    // this.menu = this.setMenu()
    this.ready = true
  }




  ngOnInit() { }

}


