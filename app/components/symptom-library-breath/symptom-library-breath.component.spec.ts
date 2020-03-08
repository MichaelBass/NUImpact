import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryBreathComponent } from './symptom-library-breath.component';

describe('SymptomLibraryBreathComponent', () => {
  let component: SymptomLibraryBreathComponent;
  let fixture: ComponentFixture<SymptomLibraryBreathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryBreathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryBreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
