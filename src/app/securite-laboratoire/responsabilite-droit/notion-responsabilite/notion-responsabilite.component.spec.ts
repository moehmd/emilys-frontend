import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionResponsabiliteComponent } from './notion-responsabilite.component';

describe('NotionResponsabiliteComponent', () => {
  let component: NotionResponsabiliteComponent;
  let fixture: ComponentFixture<NotionResponsabiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotionResponsabiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionResponsabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
