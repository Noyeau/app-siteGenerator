import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-wc',
  templateUrl: './text-wc.component.html',
  styleUrls: ['./text-wc.component.css']
})
export class TextWcComponent implements OnInit {
  @Input() bloc: any;

  constructor() {}

  ngOnInit() {
  }

}
