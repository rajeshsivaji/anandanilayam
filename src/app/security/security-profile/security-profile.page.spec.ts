import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityProfilePage } from './security-profile.page';

describe('SecurityProfilePage', () => {
  let component: SecurityProfilePage;
  let fixture: ComponentFixture<SecurityProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
