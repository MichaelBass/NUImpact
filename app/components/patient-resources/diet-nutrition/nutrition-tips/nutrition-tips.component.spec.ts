import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionTipsComponent } from './nutrition-tips.component';

describe('NutritionTipsComponent', () => {
  let component: NutritionTipsComponent;
  let fixture: ComponentFixture<NutritionTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
