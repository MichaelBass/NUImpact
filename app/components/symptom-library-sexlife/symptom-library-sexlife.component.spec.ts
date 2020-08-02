import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryVomitingComponent } from './symptom-library-vomiting.component';

describe('SymptomLibraryVomitingComponent', () => {
  let component: SymptomLibraryVomitingComponent;
  let fixture: ComponentFixture<SymptomLibraryVomitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryVomitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryVomitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
