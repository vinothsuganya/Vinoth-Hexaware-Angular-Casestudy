import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppocheckComponent } from './appocheck.component';

describe('AppocheckComponent', () => {
  let component: AppocheckComponent;
  let fixture: ComponentFixture<AppocheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppocheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
