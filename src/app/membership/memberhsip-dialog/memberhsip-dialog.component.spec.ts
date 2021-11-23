import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberhsipDialogComponent } from './memberhsip-dialog.component';

describe('MemberhsipDialogComponent', () => {
  let component: MemberhsipDialogComponent;
  let fixture: ComponentFixture<MemberhsipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberhsipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberhsipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
