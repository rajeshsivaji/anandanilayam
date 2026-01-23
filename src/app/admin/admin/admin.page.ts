import { Component } from '@angular/core';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { gridOutline, peopleOutline, personOutline, constructOutline, settingsOutline, cardOutline, documentTextOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AdminPage {
  constructor() {
    addIcons({ gridOutline, peopleOutline, personOutline, constructOutline, settingsOutline, cardOutline, documentTextOutline });
  }
}
