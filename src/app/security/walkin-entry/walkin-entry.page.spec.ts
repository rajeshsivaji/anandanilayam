import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalkinEntryPage } from './walkin-entry.page';

describe('WalkinEntryPage', () => {
  let component: WalkinEntryPage;
  let fixture: ComponentFixture<WalkinEntryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
