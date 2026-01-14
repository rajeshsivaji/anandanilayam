import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenantVisitorsPage } from './tenant-visitors.page';

describe('TenantVisitorsPage', () => {
  let component: TenantVisitorsPage;
  let fixture: ComponentFixture<TenantVisitorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantVisitorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
