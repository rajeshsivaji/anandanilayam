import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, checkmarkCircleOutline, closeCircleOutline, alertCircleOutline, cardOutline, cashOutline, listOutline, peopleOutline, shieldOutline, documentTextOutline, businessOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButton, CommonModule, FormsModule]
})
export class AdminDashboardPage implements OnInit {
  totalPlots = 150;
  paidCount = 120;
  unpaidCount = 30;
  openComplaints = 8;

  constructor(private router: Router) {
    addIcons({ homeOutline, checkmarkCircleOutline, closeCircleOutline, alertCircleOutline, cardOutline, cashOutline, listOutline, peopleOutline, shieldOutline, documentTextOutline, businessOutline });
  }

  ngOnInit() {
  }

  goToPaymentTracking() {
    this.router.navigate(['/admin/payment-tracking']);
  }

  goToOfflinePayment() {
    this.router.navigate(['/admin/offline-payment']);
  }

  goToPlotList() {
    this.router.navigate(['/admin/plot-list']);
  }

  goToOwnerList() {
    this.router.navigate(['/admin/owner-list']);
  }

  goToGuardList() {
    this.router.navigate(['/admin/guard-list']);
  }

  goToNoticeList() {
    this.router.navigate(['/admin/notice-list']);
  }

  goToTenantList() {
    this.router.navigate(['/admin/tenant-list']);
  }

}
