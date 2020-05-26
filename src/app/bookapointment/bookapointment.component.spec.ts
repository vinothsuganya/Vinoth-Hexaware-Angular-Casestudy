import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookapointmentComponent } from './bookapointment.component';

describe('BookapointmentComponent', () => {
  let component: BookapointmentComponent;
  let fixture: ComponentFixture<BookapointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookapointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookapointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
