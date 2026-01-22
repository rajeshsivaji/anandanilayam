import { Component } from '@angular/core';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, peopleOutline, documentTextOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-non-staying-owner',
  templateUrl: './non-staying-owner.page.html',
  styleUrls: ['./non-staying-owner.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet, RouterLink, RouterLinkActive]
})
export class NonStayingOwnerPage {
  constructor() {
    addIcons({ homeOutline, peopleOutline, documentTextOutline, personOutline });
  }
}
