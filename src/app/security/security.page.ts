import { Component } from '@angular/core';
import { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, personAddOutline, documentTextOutline, warningOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterOutlet, RouterLink, RouterLinkActive]
})
export class SecurityPage {
  constructor() {
    addIcons({ homeOutline, personAddOutline, documentTextOutline, warningOutline, personOutline });
  }
}