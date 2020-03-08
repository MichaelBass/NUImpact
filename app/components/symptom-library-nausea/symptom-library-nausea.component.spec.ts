import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibraryNauseaComponent } from './symptom-library-nausea.component';

describe('SymptomLibraryNauseaComponent', () => {
  let component: SymptomLibraryNauseaComponent;
  let fixture: ComponentFixture<SymptomLibraryNauseaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibraryNauseaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibraryNauseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
