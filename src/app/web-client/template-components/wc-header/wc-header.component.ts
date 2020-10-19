import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wc-header',
  templateUrl: './wc-header.component.html',
  styleUrls: ['./wc-header.component.css']
})
export class WcHeaderComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
