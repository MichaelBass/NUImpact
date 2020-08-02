import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingCessationComponent } from './smokingcessation.component';

describe('SmokingCessationComponent', () => {
  let component: SmokingCessationComponent;
  let fixture: ComponentFixture<SmokingCessationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokingCessationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokingCessationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
