/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcCountersComponent } from './wc-counters.component';

describe('WcCountersComponent', () => {
  let component: WcCountersComponent;
  let fixture: ComponentFixture<WcCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
