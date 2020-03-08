import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossAppetiteComponent } from './loss-appetite.component';

describe('LossAppetiteComponent', () => {
  let component: LossAppetiteComponent;
  let fixture: ComponentFixture<LossAppetiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossAppetiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossAppetiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
