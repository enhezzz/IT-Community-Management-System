import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningNoteComponent } from './learning-note.component';

describe('LearningNoteComponent', () => {
  let component: LearningNoteComponent;
  let fixture: ComponentFixture<LearningNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
