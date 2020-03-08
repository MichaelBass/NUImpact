import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryPhysicalFunctionComponent } from './symptom-library-physicalfunction.component';

describe('SymptomLibraryPhysicalFunctionComponent', () => {
  let component: SymptomLibraryPhysicalFunctionComponent;
  let fixture: ComponentFixture<SymptomLibraryPhysicalFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryPhysicalFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryPhysicalFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
