import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OncologyComponent } from './oncology.component';

describe('OncologyComponent', () => {
  let component: OncologyComponent;
  let fixture: ComponentFixture<OncologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OncologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
