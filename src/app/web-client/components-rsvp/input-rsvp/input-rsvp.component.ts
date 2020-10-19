import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-rsvp',
  templateUrl: './input-rsvp.component.html',
  styleUrls: ['./input-rsvp.component.css']
})
export class InputRsvpComponent implements OnInit {
  @Input() userData
  @Output() valueChange:EventEmitter<any>=new EventEmitter()

  @Input() item

  controller: FormControl = new FormControl()


  constructor() {
  
  }

  ngOnInit() {
    this.controller.setValue(this.userData)
    this.controller.valueChanges.subscribe(res=>{
      this.valueChange.emit(res)
    })
  }

}
