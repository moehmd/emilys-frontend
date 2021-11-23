import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienUtileComponent } from './lien-utile.component';

describe('LienUtileComponent', () => {
  let component: LienUtileComponent;
  let fixture: ComponentFixture<LienUtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienUtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienUtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
