import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryDiarrheaComponent } from './symptom-library-diarrhea.component';

describe('SymptomLibraryDiarrheaComponent', () => {
  let component: SymptomLibraryDiarrheaComponent;
  let fixture: ComponentFixture<SymptomLibraryDiarrheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryDiarrheaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryDiarrheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
