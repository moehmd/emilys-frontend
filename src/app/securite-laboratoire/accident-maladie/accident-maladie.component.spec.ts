import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentMaladieComponent } from './accident-maladie.component';

describe('AccidentMaladieComponent', () => {
  let component: AccidentMaladieComponent;
  let fixture: ComponentFixture<AccidentMaladieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentMaladieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
