import { Injectable } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WebClientService {
  private _webSiteParams = null
  webSiteParams: BehaviorSubject<any> = new BehaviorSubject(this._webSiteParams)
  user: BehaviorSubject<any> = new BehaviorSubject(null)
  menu: BehaviorSubject<any> = new BehaviorSubject(null)


  constructor(
    private eventService: EventService
  ) {
    this.webSiteParams.subscribe(res => {
      this._webSiteParams = res
    })
  }



  /**
   * Uniquement quand le module WebClient est activé !!!
   * Récupère les datas du site a afficher
   */
  setClientWebSite(siteCode = "siteDemo") {
    this.eventService.myEvents.subscribe(res => {
      let site = res.find(x=>x.code == siteCode)
      if (site) {
        this.setMenu(site)
        this.getEventGuest()
      } else {
        site = res.find(x=>x.code == "siteDemo")
      }
      this.webSiteParams.next(site)
    })
  }


  getPage(pageCode) {
    if (this._webSiteParams && this._webSiteParams.pages) {
      return this._webSiteParams.pages.find(x => x.code == pageCode)
    }
    return null
  }





  getEventGuest() {
    this.user.next(_fakeUser)
    console.log(this.user.value)
  }


  setMenu(siteParams = this.webSiteParams.value) {
    console.log(siteParams)
    if (!siteParams) {
      this.menu.next(null)
    }
    let menu = {
      style: siteParams.style.menu,
      pages: []
    }
    siteParams.pages.map((page, i) => {
      let itemMenu = {
        title: page.title,
        route: null
      }
      menu.pages.push(itemMenu)
      if (page.isRsvp) {
        itemMenu.route = page.url ? page.url : '/client/' + siteParams.code + '/rsvp'
        return
      }
      itemMenu.route = page.url ? page.url : '/client/' + siteParams.code + '/' + page.code
    })
    this.menu.next(menu)
  }

}


const _fakeUser = {
  id: 5,
  datas: {
    rsvpForm: [
      {
        blocCode: 123,
        data: [
          {
            code: "firstName",
            value: "Gerard"
          },
          {
            code: "lastName",
            value: "Dupont"
          },
        ]
      },
      {
        blocCode: 456,
        data: [
          {
            code: "come-on",
            value: "non"
          }
        ]
      }
    ]

  }
}
