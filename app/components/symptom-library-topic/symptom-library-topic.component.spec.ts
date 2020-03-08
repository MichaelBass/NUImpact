import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryTopicComponent } from './symptom-library-topic.component';

describe('SymptomLibraryTopicComponent', () => {
  let component: SymptomLibraryTopicComponent;
  let fixture: ComponentFixture<SymptomLibraryTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
