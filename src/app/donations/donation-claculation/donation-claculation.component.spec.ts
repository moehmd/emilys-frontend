import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationClaculationComponent } from './donation-claculation.component';

describe('DonationClaculationComponent', () => {
  let component: DonationClaculationComponent;
  let fixture: ComponentFixture<DonationClaculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationClaculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationClaculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
