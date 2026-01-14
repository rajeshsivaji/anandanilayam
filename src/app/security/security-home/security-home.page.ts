import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, checkmarkOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './security-home.page.html',
  styleUrls: ['./security-home.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonIcon]
})
export class HomePage {
  constructor() {
    addIcons({ peopleOutline, checkmarkOutline, calendarOutline });
  }
}