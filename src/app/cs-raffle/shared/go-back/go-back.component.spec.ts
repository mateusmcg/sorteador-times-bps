import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackComponent } from './go-back.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GoBackComponent', () => {
  let component: GoBackComponent;
  let fixture: ComponentFixture<GoBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackComponent ],
      providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, Location],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeDefined();
  });
});
