import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomLibrarySkinComponent } from './symptom-library-skin.component';

describe('SymptomLibrarySkinComponent', () => {
  let component: SymptomLibrarySkinComponent;
  let fixture: ComponentFixture<SymptomLibrarySkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomLibrarySkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomLibrarySkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
