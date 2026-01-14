import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonStayingOwnerTenantPage } from './non-staying-owner-tenant.page';

describe('NonStayingOwnerTenantPage', () => {
  let component: NonStayingOwnerTenantPage;
  let fixture: ComponentFixture<NonStayingOwnerTenantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStayingOwnerTenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
