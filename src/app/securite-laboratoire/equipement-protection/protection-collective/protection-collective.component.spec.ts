import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionCollectiveComponent } from './protection-collective.component';

describe('ProtectionCollectiveComponent', () => {
  let component: ProtectionCollectiveComponent;
  let fixture: ComponentFixture<ProtectionCollectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionCollectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionCollectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
