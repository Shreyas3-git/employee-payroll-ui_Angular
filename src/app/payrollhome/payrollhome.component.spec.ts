import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollhomeComponent } from './payrollhome.component';

describe('PayrollhomeComponent', () => {
  let component: PayrollhomeComponent;
  let fixture: ComponentFixture<PayrollhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
