import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonStayingOwnerPage } from './non-staying-owner.page';

describe('NonStayingOwnerPage', () => {
  let component: NonStayingOwnerPage;
  let fixture: ComponentFixture<NonStayingOwnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStayingOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
