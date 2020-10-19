import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-wc',
  templateUrl: './timeline-wc.component.html',
  styleUrls: ['./timeline-wc.component.css']
})
export class TimelineWcComponent implements OnInit {
  @Input() bloc: any;
  constructor() { }

  ngOnInit() {
    if(!this.bloc.data){
      this.bloc.data = []
    }
  }

  addElem(){
    this.bloc.data.push({
      date:new Date(),
      title:'',
      description:'',
      image:'',
    })
  }


  doReorder(ev){
    console.log(event)
    const itemMove = this.bloc.data.splice(ev.detail.from, 1)[0];
    this.bloc.data.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }
}
