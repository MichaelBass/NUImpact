import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrativeComponent } from './integrative.component';

describe('IntegrativeComponent', () => {
  let component: IntegrativeComponent;
  let fixture: ComponentFixture<IntegrativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
