import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonStayingOwnerPropertyPage } from './non-staying-owner-property.page';

describe('NonStayingOwnerPropertyPage', () => {
  let component: NonStayingOwnerPropertyPage;
  let fixture: ComponentFixture<NonStayingOwnerPropertyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStayingOwnerPropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
