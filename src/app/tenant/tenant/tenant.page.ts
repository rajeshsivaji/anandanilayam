import { Component } from '@angular/core';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, peopleOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.page.html',
  styleUrls: ['./tenant.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet, RouterLink, RouterLinkActive]
})
export class TenantPage {
  constructor() {
    addIcons({ homeOutline, peopleOutline, personOutline });
  }
}
