import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementProtectionComponent } from './equipement-protection.component';

describe('EquipementProtectionComponent', () => {
  let component: EquipementProtectionComponent;
  let fixture: ComponentFixture<EquipementProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
