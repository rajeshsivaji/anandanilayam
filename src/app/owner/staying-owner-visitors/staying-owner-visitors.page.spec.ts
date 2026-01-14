import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StayingOwnerVisitorsPage } from './staying-owner-visitors.page';

describe('StayingOwnerVisitorsPage', () => {
  let component: StayingOwnerVisitorsPage;
  let fixture: ComponentFixture<StayingOwnerVisitorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StayingOwnerVisitorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
