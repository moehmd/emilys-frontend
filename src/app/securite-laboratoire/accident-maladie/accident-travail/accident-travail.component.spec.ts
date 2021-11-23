import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentTravailComponent } from './accident-travail.component';

describe('AccidentTravailComponent', () => {
  let component: AccidentTravailComponent;
  let fixture: ComponentFixture<AccidentTravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentTravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
