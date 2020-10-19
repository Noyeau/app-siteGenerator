import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-rsvp',
  templateUrl: './select-rsvp.component.html',
  styleUrls: ['./select-rsvp.component.css']
})
export class SelectRsvpComponent implements OnInit {
  @Input() userData = null
  @Output() valueChange:EventEmitter<any>=new EventEmitter()
  controller: FormControl = new FormControl()

  @Input() item
  @Input() multi = false

  constructor() {

  }

  ngOnInit() {
    this.controller.setValue(this.userData)
    this.controller.valueChanges.subscribe(res=>{
      this.valueChange.emit(res)
    })
  }

}
