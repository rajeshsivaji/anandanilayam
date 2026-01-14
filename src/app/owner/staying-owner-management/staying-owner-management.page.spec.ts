import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StayingOwnerManagementPage } from './staying-owner-management.page';

describe('StayingOwnerManagementPage', () => {
  let component: StayingOwnerManagementPage;
  let fixture: ComponentFixture<StayingOwnerManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StayingOwnerManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
