import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyEatingComponent } from './healthy-eating.component';

describe('HealthyEatingComponent', () => {
  let component: HealthyEatingComponent;
  let fixture: ComponentFixture<HealthyEatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyEatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyEatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
