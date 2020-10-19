import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-page-editor',
  templateUrl: './page-editor.component.html',
  styleUrls: ['./page-editor.component.css']
})
export class PageEditorComponent implements OnInit {
  @Input() page


  blocList = [
    'text', 'image', 'timeline', 'counter'
  ]


  constructor(
    private eventService: EventService
  ) {
    setInterval(()=>{
      console.log(this.page)
    },2000)
  }

  ngOnInit() {
    this.eventService.myEvents.subscribe(res => {
      this.page = res[0].pages[0]
      console.log(this.page)
    })
  }

  addBloc(blocType, index=0) {
    this.page.blocs.splice(index,0,{
      data: null,
      type: blocType
    })
  }


  doReorder(ev){
    console.log(event)
    const itemMove = this.page.blocs.splice(ev.detail.from, 1)[0];
    this.page.blocs.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

}
