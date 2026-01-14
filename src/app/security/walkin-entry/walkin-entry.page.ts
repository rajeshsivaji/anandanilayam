import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-walkin-entry',
  templateUrl: './walkin-entry.page.html',
  styleUrls: ['./walkin-entry.page.scss'],
  standalone: true,
  imports: [IonContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, FormsModule, HeaderComponent]
})
export class WalkinEntryPage {
  visitorMobile = '';
  visitorName = '';
  flatNumber = '';
  purpose = '';

  constructor(private router: Router) {}

  submitEntry() {
    console.log('Walk-in entry:', {
      mobile: this.visitorMobile,
      name: this.visitorName,
      flat: this.flatNumber,
      purpose: this.purpose
    });
    this.router.navigate(['/security/entry']);
  }
}