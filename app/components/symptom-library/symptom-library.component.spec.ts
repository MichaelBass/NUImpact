import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryComponent } from './symptom-library.component';

describe('SymptomLibraryComponent', () => {
  let component: SymptomLibraryComponent;
  let fixture: ComponentFixture<SymptomLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
