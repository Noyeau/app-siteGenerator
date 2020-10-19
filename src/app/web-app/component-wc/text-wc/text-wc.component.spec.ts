/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextWcComponent } from './text-wc.component';

describe('TextWcComponent', () => {
  let component: TextWcComponent;
  let fixture: ComponentFixture<TextWcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextWcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
