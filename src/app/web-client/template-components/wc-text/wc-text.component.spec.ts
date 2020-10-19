/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WcTextComponent } from './wc-text.component';

describe('WcTextComponent', () => {
  let component: WcTextComponent;
  let fixture: ComponentFixture<WcTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
