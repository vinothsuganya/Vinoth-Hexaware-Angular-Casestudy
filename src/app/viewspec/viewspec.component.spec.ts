import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspecComponent } from './viewspec.component';

describe('ViewspecComponent', () => {
  let component: ViewspecComponent;
  let fixture: ComponentFixture<ViewspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
