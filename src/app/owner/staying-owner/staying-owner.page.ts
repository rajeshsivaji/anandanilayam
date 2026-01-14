import { Component } from '@angular/core';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, peopleOutline, businessOutline } from 'ionicons/icons';

@Component({
  selector: 'app-staying-owner',
  templateUrl: './staying-owner.page.html',
  styleUrls: ['./staying-owner.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet, RouterLink, RouterLinkActive]
})
export class StayingOwnerPage {
  constructor() {
    addIcons({ homeOutline, peopleOutline, businessOutline });
  }
}
