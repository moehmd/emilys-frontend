import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationInformationComponent } from './formation-information.component';

describe('FormationInformationComponent', () => {
  let component: FormationInformationComponent;
  let fixture: ComponentFixture<FormationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
