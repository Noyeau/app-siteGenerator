import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-wc',
  templateUrl: './image-wc.component.html',
  styleUrls: ['./image-wc.component.css']
})
export class ImageWcComponent implements OnInit {
  @Input() bloc: any;
display=false;
  constructor() { }

  ngOnInit() {
  }

}
