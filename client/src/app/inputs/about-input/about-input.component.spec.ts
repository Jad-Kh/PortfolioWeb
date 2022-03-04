import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInputComponent } from './about-input.component';

describe('AboutInputComponent', () => {
  let component: AboutInputComponent;
  let fixture: ComponentFixture<AboutInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
