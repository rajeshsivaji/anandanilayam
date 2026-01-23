import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { saveOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-offline-payment',
  templateUrl: './offline-payment.page.html',
  styleUrls: ['./offline-payment.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonIcon, IonButtons, CommonModule, FormsModule]
})
export class OfflinePaymentPage implements OnInit {
  plotNo = '';
  amount = '';
  paymentMode = '';
  markAsPaid = false;

  constructor() {
    addIcons({ saveOutline, arrowBackOutline });
  }

  ngOnInit() {
  }

  submitPayment() {
    if (!this.plotNo || !this.amount || !this.paymentMode) {
      alert('Please fill all required fields');
      return;
    }

    const paymentData = {
      plotNo: this.plotNo,
      amount: this.amount,
      paymentMode: this.paymentMode,
      status: this.markAsPaid ? 'paid' : 'pending',
      date: new Date().toISOString().split('T')[0]
    };

    console.log('Payment submitted:', paymentData);
    alert(`Payment entry created for Plot ${this.plotNo}\nAmount: ₹${this.amount}\nMode: ${this.paymentMode}\nStatus: ${paymentData.status}`);
    
    // Reset form
    this.plotNo = '';
    this.amount = '';
    this.paymentMode = '';
    this.markAsPaid = false;
  }

  goBack() {
    window.history.back();
  }
}