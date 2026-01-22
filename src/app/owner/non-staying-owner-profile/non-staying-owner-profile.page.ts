import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { callOutline, calendarOutline, logOutOutline, personCircleOutline, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-non-staying-owner-profile',
  templateUrl: './non-staying-owner-profile.page.html',
  styleUrls: ['./non-staying-owner-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonButton, CommonModule, FormsModule]
})
export class NonStayingOwnerProfilePage implements OnInit {
  phoneNumber = '+91 5555555555';
  memberSince = 'January 2024';
  propertyNumber = 'C-303';

  constructor(private router: Router) {
    addIcons({ callOutline, calendarOutline, logOutOutline, personCircleOutline, homeOutline });
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('loginMobile');
    this.router.navigate(['/login']);
  }
}