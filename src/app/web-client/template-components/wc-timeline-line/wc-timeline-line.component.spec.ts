/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcTimelineLineComponent } from './wc-timeline-line.component';

describe('WcTimelineLineComponent', () => {
  let component: WcTimelineLineComponent;
  let fixture: ComponentFixture<WcTimelineLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTimelineLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTimelineLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
