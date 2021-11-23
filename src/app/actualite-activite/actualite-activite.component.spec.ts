import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteActiviteComponent } from './actualite-activite.component';

describe('ActualiteActiviteComponent', () => {
  let component: ActualiteActiviteComponent;
  let fixture: ComponentFixture<ActualiteActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualiteActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiteActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
