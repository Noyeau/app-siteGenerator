import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-wc-text',
  templateUrl: './wc-text.component.html',
  styleUrls: ['./wc-text.component.css']
})
export class WcTextComponent implements OnInit {

  @Input() data: string;
  constructor() { }

  ngOnInit() {
  }


}
