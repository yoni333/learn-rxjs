/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuffersComponent } from './buffers.component';

describe('BuffersComponent', () => {
  let component: BuffersComponent;
  let fixture: ComponentFixture<BuffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
