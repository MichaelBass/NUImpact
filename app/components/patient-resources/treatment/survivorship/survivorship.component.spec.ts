import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivorshipComponent } from './survivorship.component';

describe('SurvivorshipComponent', () => {
  let component: SurvivorshipComponent;
  let fixture: ComponentFixture<SurvivorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
