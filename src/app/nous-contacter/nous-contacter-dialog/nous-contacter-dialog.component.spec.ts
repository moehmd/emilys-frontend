import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NousContacterDialogComponent } from './nous-contacter-dialog.component';

describe('NousContacterDialogComponent', () => {
  let component: NousContacterDialogComponent;
  let fixture: ComponentFixture<NousContacterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NousContacterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NousContacterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
