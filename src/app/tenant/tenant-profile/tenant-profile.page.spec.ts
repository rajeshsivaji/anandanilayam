import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenantProfilePage } from './tenant-profile.page';

describe('TenantProfilePage', () => {
  let component: TenantProfilePage;
  let fixture: ComponentFixture<TenantProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
