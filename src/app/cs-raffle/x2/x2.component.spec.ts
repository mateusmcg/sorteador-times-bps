import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X2Component } from './x2.component';

describe('X2Component', () => {
  let component: X2Component;
  let fixture: ComponentFixture<X2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
