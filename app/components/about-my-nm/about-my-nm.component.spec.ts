import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyNmComponent } from './about-my-nm.component';

describe('AboutMyNmComponent', () => {
  let component: AboutMyNmComponent;
  let fixture: ComponentFixture<AboutMyNmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMyNmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyNmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
