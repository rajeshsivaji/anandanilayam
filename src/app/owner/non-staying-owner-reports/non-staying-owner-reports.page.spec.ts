import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonStayingOwnerReportsPage } from './non-staying-owner-reports.page';

describe('NonStayingOwnerReportsPage', () => {
  let component: NonStayingOwnerReportsPage;
  let fixture: ComponentFixture<NonStayingOwnerReportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStayingOwnerReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
