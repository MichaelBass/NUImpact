import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryPainComponent } from './symptom-library-pain.component';

describe('SymptomLibraryPainComponent', () => {
  let component: SymptomLibraryPainComponent;
  let fixture: ComponentFixture<SymptomLibraryPainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryPainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
