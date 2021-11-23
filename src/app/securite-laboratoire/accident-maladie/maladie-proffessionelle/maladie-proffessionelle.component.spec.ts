import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieProffessionelleComponent } from './maladie-proffessionelle.component';

describe('MaladieProffessionelleComponent', () => {
  let component: MaladieProffessionelleComponent;
  let fixture: ComponentFixture<MaladieProffessionelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladieProffessionelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladieProffessionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
