import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryAnxietyComponent } from './symptom-library-anxiety.component';

describe('SymptomLibraryAnxietyComponent', () => {
  let component: SymptomLibraryAnxietyComponent;
  let fixture: ComponentFixture<SymptomLibraryAnxietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryAnxietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
