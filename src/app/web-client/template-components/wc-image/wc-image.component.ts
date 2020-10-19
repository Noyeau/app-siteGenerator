import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wc-image',
  templateUrl: './wc-image.component.html',
  styleUrls: ['./wc-image.component.css']
})
export class WcImageComponent implements OnInit {
  @Input() data:string;

  constructor() { }

  ngOnInit() {
  }

}
