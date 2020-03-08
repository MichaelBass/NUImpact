import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFoodsComponent } from './healthy-foods.component';

describe('HealthyFoodsComponent', () => {
  let component: HealthyFoodsComponent;
  let fixture: ComponentFixture<HealthyFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
