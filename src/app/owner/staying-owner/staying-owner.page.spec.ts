import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StayingOwnerPage } from './staying-owner.page';

describe('StayingOwnerPage', () => {
  let component: StayingOwnerPage;
  let fixture: ComponentFixture<StayingOwnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StayingOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
