import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionIndividuelleComponent } from './protection-individuelle.component';

describe('ProtectionIndividuelleComponent', () => {
  let component: ProtectionIndividuelleComponent;
  let fixture: ComponentFixture<ProtectionIndividuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionIndividuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionIndividuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
