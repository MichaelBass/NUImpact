import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellBeingComponent } from './wellbeing.component';

describe('WellBeingComponent', () => {
  let component: WellBeingComponent;
  let fixture: ComponentFixture<WellBeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellBeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellBeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
