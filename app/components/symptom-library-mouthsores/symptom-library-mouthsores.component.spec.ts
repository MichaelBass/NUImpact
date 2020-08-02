import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryMouthSoresComponent } from './symptom-library-mouthsores.component';

describe('SymptomLibraryMouthSoresComponent', () => {
  let component: SymptomLibraryMouthSoresComponent;
  let fixture: ComponentFixture<SymptomLibraryMouthSoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryMouthSoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryMouthSoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
