import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisqueBiologiqueComponent } from './risque-biologique.component';

describe('RisqueBiologiqueComponent', () => {
  let component: RisqueBiologiqueComponent;
  let fixture: ComponentFixture<RisqueBiologiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisqueBiologiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisqueBiologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
