import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueRadioactifComponent } from './risque-radioactif.component';

describe('RisqueRadioactifComponent', () => {
  let component: RisqueRadioactifComponent;
  let fixture: ComponentFixture<RisqueRadioactifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisqueRadioactifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisqueRadioactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
