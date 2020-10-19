import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-site-editor',
  templateUrl: './site-editor.component.html',
  styleUrls: ['./site-editor.component.css']
})
export class SiteEditorComponent implements OnInit {
  siteWebs

  selectSiteCode:string=null
  selectPageCode:string=null

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.myEvents.subscribe(res => {
      this.siteWebs = res
      console.log(this.siteWebs)
    })

  }

  getSite(code=this.selectSiteCode){
    return this.siteWebs.find(x=>x.code ==code)
  }

  getPage(siteCode=this.selectSiteCode, pageCode=this.selectPageCode){
    return this.getSite(siteCode).pages.find(x=>x.code==pageCode)
  }


  save(){
    this.eventService.myEvents.next(this.siteWebs)
  }


}
