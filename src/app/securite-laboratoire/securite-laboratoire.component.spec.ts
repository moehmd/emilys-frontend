import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteLaboratoireComponent } from './securite-laboratoire.component';

describe('SecuriteLaboratoireComponent', () => {
  let component: SecuriteLaboratoireComponent;
  let fixture: ComponentFixture<SecuriteLaboratoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuriteLaboratoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
