import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabiliteDroitComponent } from './responsabilite-droit.component';

describe('ResponsabiliteDroitComponent', () => {
  let component: ResponsabiliteDroitComponent;
  let fixture: ComponentFixture<ResponsabiliteDroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsabiliteDroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabiliteDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
