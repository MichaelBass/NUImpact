import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryConstipationComponent } from './symptom-library-constipation.component';

describe('SymptomLibraryBreathComponent', () => {
  let component: SymptomLibraryConstipationComponent;
  let fixture: ComponentFixture<SymptomLibraryConstipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryConstipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryConstipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
