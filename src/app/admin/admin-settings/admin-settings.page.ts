import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonTextarea, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { saveOutline, documentTextOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.page.html',
  styleUrls: ['./admin-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonCheckbox, IonTextarea, IonButton, IonIcon, CommonModule, FormsModule]
})
export class AdminSettingsPage implements OnInit {
  ratePerSqft = 1.5;
  dueDate = '15th';
  lateFee5Percent = true;
  lateFee100Rs = true;
  lateFee200Rs = false;
  additionalRules = '';
  selectedMonth = '2024-01';

  constructor() {
    addIcons({ saveOutline, documentTextOutline });
  }

  ngOnInit() {
  }

  saveSettings() {
    console.log('Settings saved:', {
      ratePerSqft: this.ratePerSqft,
      dueDate: this.dueDate,
      lateFee5Percent: this.lateFee5Percent,
      lateFee100Rs: this.lateFee100Rs,
      lateFee200Rs: this.lateFee200Rs,
      additionalRules: this.additionalRules
    });
    // Add save logic here
  }

  generateBills() {
    // Generate bills for all 150 plots
    const totalPlots = 150;
    const billAmount = this.ratePerSqft * 1000; // Assuming 1000 sqft per plot
    
    console.log('Generating bills for:', {
      month: this.selectedMonth,
      ratePerSqft: this.ratePerSqft,
      totalPlots: totalPlots,
      billAmount: billAmount
    });
    
    // Simulate bill generation for all plots
    const generatedBills = [];
    for (let i = 1; i <= totalPlots; i++) {
      const plotNo = `P${String(i).padStart(3, '0')}`;
      generatedBills.push({
        plotNo: plotNo,
        month: this.selectedMonth,
        amount: billAmount,
        dueDate: this.dueDate,
        status: 'unpaid',
        generatedDate: new Date().toISOString().split('T')[0]
      });
    }
    
    console.log(`Generated ${generatedBills.length} bills:`, generatedBills.slice(0, 5)); // Log first 5 bills
    alert(`Bills generated successfully for ${this.selectedMonth}!\n\nTotal Plots: ${totalPlots}\nAmount per plot: ₹${billAmount}\nDue Date: ${this.dueDate} of every month`);
  }

  saveAndGenerateBills() {
    this.saveSettings();
    this.generateBills();
  }

}
