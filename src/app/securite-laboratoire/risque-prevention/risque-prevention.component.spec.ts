import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquePreventionComponent } from './risque-prevention.component';

describe('RisquePreventionComponent', () => {
  let component: RisquePreventionComponent;
  let fixture: ComponentFixture<RisquePreventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisquePreventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisquePreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
