import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesInputComponent } from './languages-input.component';

describe('LanguagesInputComponent', () => {
  let component: LanguagesInputComponent;
  let fixture: ComponentFixture<LanguagesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
