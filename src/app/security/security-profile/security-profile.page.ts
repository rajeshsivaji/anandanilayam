import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { callOutline, calendarOutline, logOutOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.page.html',
  styleUrls: ['./security-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonButton, CommonModule, FormsModule]
})
export class SecurityProfilePage implements OnInit {
  phoneNumber = '+91 1234567890';
  memberSince = 'January 2024';

  constructor(private router: Router) {
    addIcons({ callOutline, calendarOutline, logOutOutline, personCircleOutline });
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
