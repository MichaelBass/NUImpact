import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryInsomniaComponent } from './symptom-library-insomnia.component';

describe('SymptomLibraryInsomniaComponent', () => {
  let component: SymptomLibraryInsomniaComponent;
  let fixture: ComponentFixture<SymptomLibraryInsomniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryInsomniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryInsomniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
