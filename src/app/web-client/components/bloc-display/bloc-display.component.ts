import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bloc-display',
  templateUrl: './bloc-display.component.html',
  styleUrls: ['./bloc-display.component.css']
})
export class BlocDisplayComponent implements OnInit {
  @Input() blocs: any[];

  @Input() userData: any[] = null

  @Output() blocChange: EventEmitter<any> = new EventEmitter()

  public count: number = 1

  constructor() { }

  ngOnInit() {
  }

  anchorVisible() {
    this.count++
    console.log(this.count)
  }

  getDataBloc(blocCode) {
    if (!this.userData) {
      return null
    }
    let tmp = this.userData.find(x => x.blocCode == blocCode)
    return tmp.data
  }


  transferToParent(datas) {
    console.log(datas)
  }
}
