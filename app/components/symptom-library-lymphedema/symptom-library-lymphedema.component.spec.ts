import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryLymphedemaComponent } from './symptom-library-lymphedema.component';

describe('SymptomLibraryLymphedemaComponent', () => {
  let component: SymptomLibraryLymphedemaComponent;
  let fixture: ComponentFixture<SymptomLibraryLymphedemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryLymphedemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryLymphedemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
