import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StayingOwnerHomePage } from './staying-owner-home.page';

describe('StayingOwnerHomePage', () => {
  let component: StayingOwnerHomePage;
  let fixture: ComponentFixture<StayingOwnerHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StayingOwnerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
