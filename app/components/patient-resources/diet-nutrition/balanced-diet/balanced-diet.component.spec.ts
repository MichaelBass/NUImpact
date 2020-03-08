import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancedDietComponent } from './balanced-diet.component';

describe('BalancedDietComponent', () => {
  let component: BalancedDietComponent;
  let fixture: ComponentFixture<BalancedDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancedDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancedDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
