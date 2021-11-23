import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeursResponsabiliteComponent } from './acteurs-responsabilite.component';

describe('ActeursResponsabiliteComponent', () => {
  let component: ActeursResponsabiliteComponent;
  let fixture: ComponentFixture<ActeursResponsabiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActeursResponsabiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActeursResponsabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
