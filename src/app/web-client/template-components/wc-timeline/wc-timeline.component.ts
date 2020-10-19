import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wc-timeline',
  templateUrl: './wc-timeline.component.html',
  styleUrls: ['./wc-timeline.component.scss']
})
export class WcTimelineComponent implements OnInit {
  @Input() data: any[];
  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

}
