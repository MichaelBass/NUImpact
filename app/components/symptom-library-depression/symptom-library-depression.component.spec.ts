import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryDepressionComponent } from './symptom-library-depression.component';

describe('SymptomLibraryDepressionComponent', () => {
  let component: SymptomLibraryDepressionComponent;
  let fixture: ComponentFixture<SymptomLibraryDepressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryDepressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryDepressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
