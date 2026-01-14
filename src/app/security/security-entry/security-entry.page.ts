import { Component } from '@angular/core';
import { IonContent, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { personCircleOutline, callOutline, calendarOutline, timeOutline, manOutline, womanOutline, bicycleOutline, carOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-entry',
  templateUrl: './security-entry.page.html',
  styleUrls: ['./security-entry.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonIcon, IonButton, HeaderComponent, RouterLink]
})
export class EntryPage {
  constructor() {
    addIcons({ personCircleOutline, callOutline, calendarOutline, timeOutline, manOutline, womanOutline, bicycleOutline, carOutline });
  }
}