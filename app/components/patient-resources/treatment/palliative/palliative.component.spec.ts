import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativeComponent } from './palliative.component';

describe('PalliativeComponent', () => {
  let component: PalliativeComponent;
  let fixture: ComponentFixture<PalliativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalliativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
