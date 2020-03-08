import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryFatigueComponent } from './symptom-library-fatigue.component';

describe('SymptomLibraryFatigueComponent', () => {
  let component: SymptomLibraryFatigueComponent;
  let fixture: ComponentFixture<SymptomLibraryFatigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryFatigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryFatigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
