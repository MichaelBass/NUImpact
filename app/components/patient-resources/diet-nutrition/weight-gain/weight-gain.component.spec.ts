import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightGainComponent } from './weight-gain.component';

describe('WeightGainComponent', () => {
  let component: WeightGainComponent;
  let fixture: ComponentFixture<WeightGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
