/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcImageComponent } from './wc-image.component';

describe('WcImageComponent', () => {
  let component: WcImageComponent;
  let fixture: ComponentFixture<WcImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
