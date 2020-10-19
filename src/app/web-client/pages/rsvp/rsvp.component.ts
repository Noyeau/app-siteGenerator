import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebClientService } from '../../services/web-client.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  user;

  constructor(
    private wcService: WebClientService
  ) {
    this.wcService.user.subscribe(res => {
      if (res) {
        this.user = res
      }
      // if (res && res.datas && res.datas.rsvpForm) {
      //   let tmp = res.datas.rsvpForm.find(x => x.blocCode == this.masterBloc.code)
      //   this.userDataBloc = tmp.data
      //   console.log(this.userDataBloc)
      // }
    })
  }

  ngOnInit() {
  }


  getRsvpPage() {
    return this.wcService.getPage('rsvp')
  }

  getRsvpUserData() {
    if (this.user && this.user.datas && this.user.datas.rsvpForm) {
      return this.user.datas.rsvpForm
    }
    return null
  }

  save(){
    console.log(this.getRsvpUserData())
  }


}
