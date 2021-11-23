import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquePhysiqueComponent } from './risque-physique.component';

describe('RisquePhysiqueComponent', () => {
  let component: RisquePhysiqueComponent;
  let fixture: ComponentFixture<RisquePhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisquePhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisquePhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
