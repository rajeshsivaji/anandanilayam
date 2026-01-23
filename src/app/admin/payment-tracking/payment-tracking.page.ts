import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonChip, IonCard, IonCardContent, IonSegment, IonSegmentButton, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-payment-tracking',
  templateUrl: './payment-tracking.page.html',
  styleUrls: ['./payment-tracking.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonChip, IonCard, IonCardContent, IonSegment, IonSegmentButton, IonButtons, IonButton, IonIcon, CommonModule, FormsModule]
})
export class PaymentTrackingPage implements OnInit {
  selectedMonth = '';
  statusFilter = 'all';
  monthOptions: {value: string, label: string}[] = [];
  
  payments = [
    // Current month data (January 2026)
    { plotNo: 'A001', ownerName: 'John Doe', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-05' },
    { plotNo: 'A002', ownerName: 'Jane Smith', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'A003', ownerName: 'Mike Johnson', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-03' },
    { plotNo: 'B001', ownerName: 'Sarah Wilson', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'B002', ownerName: 'David Brown', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-07' },
    { plotNo: 'B003', ownerName: 'Lisa Garcia', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'C001', ownerName: 'Tom Anderson', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-02' },
    { plotNo: 'C002', ownerName: 'Emma White', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-08' },
    { plotNo: 'C003', ownerName: 'Robert Lee', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'D001', ownerName: 'Maria Rodriguez', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-10' },
    { plotNo: 'D002', ownerName: 'James Wilson', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'D003', ownerName: 'Linda Davis', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-12' },
    { plotNo: 'E001', ownerName: 'Michael Brown', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    { plotNo: 'E002', ownerName: 'Patricia Miller', status: 'paid', month: '2026-01', amount: 1500, paidDate: '2026-01-15' },
    { plotNo: 'E003', ownerName: 'Christopher Jones', status: 'unpaid', month: '2026-01', amount: 1500, paidDate: null },
    // Previous months data
    { plotNo: 'A001', ownerName: 'John Doe', status: 'paid', month: '2025-12', amount: 1500, paidDate: '2025-12-05' },
    { plotNo: 'A002', ownerName: 'Jane Smith', status: 'paid', month: '2025-12', amount: 1500, paidDate: '2025-12-10' },
    { plotNo: 'A001', ownerName: 'John Doe', status: 'paid', month: '2025-11', amount: 1500, paidDate: '2025-11-05' },
    { plotNo: 'A002', ownerName: 'Jane Smith', status: 'paid', month: '2025-11', amount: 1500, paidDate: '2025-11-10' }
  ];

  get filteredPayments() {
    let filtered = this.payments.filter(payment => payment.month === this.selectedMonth);
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(payment => payment.status === this.statusFilter);
    }
    return filtered;
  }

  get paidCount() {
    return this.payments.filter(p => p.month === this.selectedMonth && p.status === 'paid').length;
  }

  get unpaidCount() {
    return this.payments.filter(p => p.month === this.selectedMonth && p.status === 'unpaid').length;
  }

  constructor() {
    addIcons({ arrowBackOutline });
    this.generateMonthOptions();
  }

  ngOnInit() {
    console.log('Selected month:', this.selectedMonth);
    console.log('Filtered payments:', this.filteredPayments);
    console.log('All payments:', this.payments);
  }

  generateMonthOptions() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    
    for (let i = 0; i < 6; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = date.getFullYear();
      const month = date.getMonth();
      const value = `${year}-${String(month + 1).padStart(2, '0')}`;
      const label = `${months[month]} ${year}`;
      
      this.monthOptions.push({ value, label });
    }
    
    // Set current month as selected
    const currentYear = now.getFullYear();
    const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
    this.selectedMonth = `${currentYear}-${currentMonth}`;
  }

  onMonthChange() {
    // Month automatically updates when user selects from picker
  }

  goBack() {
    window.history.back();
  }
}