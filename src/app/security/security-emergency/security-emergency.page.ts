import { Component } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { warningOutline, personCircleOutline, callOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-emergency',
  templateUrl: './security-emergency.page.html',
  styleUrls: ['./security-emergency.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonCard, IonCardContent, HeaderComponent]
})
export class EmergencyPage {
  constructor() {
    addIcons({ warningOutline, personCircleOutline, callOutline });
  }

  triggerAlert() {
    console.log('RED ALERT TRIGGERED!');
    alert('Emergency alert sent to all residents!');
  }

  makeCall(number: string) {
    window.location.href = `tel:${number}`;
  }
}