import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenantHomePage } from './tenant-home.page';

describe('TenantHomePage', () => {
  let component: TenantHomePage;
  let fixture: ComponentFixture<TenantHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
