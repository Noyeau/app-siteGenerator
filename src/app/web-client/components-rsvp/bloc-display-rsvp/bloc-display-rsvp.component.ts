import { Component, OnInit, Input } from '@angular/core';
import { WebClientService } from '../../services/web-client.service';

@Component({
  selector: 'app-bloc-display-rsvp',
  templateUrl: './bloc-display-rsvp.component.html',
  styleUrls: ['./bloc-display-rsvp.component.css']
})
export class BlocDisplayRsvpComponent implements OnInit {
  @Input("bloc") masterBloc: any


  @Input() userDataBloc
  constructor(
    private wcService: WebClientService
  ) {

  }

  ngOnInit() {
 
  }


  setValue(codeFormItem, value) {
    console.log(codeFormItem)
    let item = this.userDataBloc.find(x => x.code == codeFormItem)
    if(!item){
      item={
        code:codeFormItem
      }
    }
    item.value = value
    console.log(this.userDataBloc)
  }


  getData(codeFormItem){
    if(!this.userDataBloc){
      return null
    }
    let item = this.userDataBloc.find(x => x.code == codeFormItem)
    if(item){
      return item.value
    }
    return null
  }



  updateUserData(){
  }




}
