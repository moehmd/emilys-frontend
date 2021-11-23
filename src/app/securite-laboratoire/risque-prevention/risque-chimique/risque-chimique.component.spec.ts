import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueChimiqueComponent } from './risque-chimique.component';

describe('RisqueChimiqueComponent', () => {
  let component: RisqueChimiqueComponent;
  let fixture: ComponentFixture<RisqueChimiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisqueChimiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisqueChimiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
