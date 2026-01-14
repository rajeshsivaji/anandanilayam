import { Component } from '@angular/core';
import { IonContent, IonSegment, IonSegmentButton, IonLabel, IonItem, IonSelect, IonSelectOption, IonCard, IonCardContent, IonButton, IonDatetime, IonDatetimeButton, IonModal, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { personCircleOutline, callOutline, logInOutline, logOutOutline } from 'ionicons/icons';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-logs',
  templateUrl: './security-logs.page.html',
  styleUrls: ['./security-logs.page.scss'],
  standalone: true,
  imports: [IonContent, IonSegment, IonSegmentButton, IonLabel, IonItem, IonSelect, IonSelectOption, IonCard, IonCardContent, IonButton, IonDatetime, IonDatetimeButton, IonModal, IonIcon, FormsModule, CommonModule, HeaderComponent]
})
export class LogsPage {
  selectedSegment = 'today';
  filterDate = 'all';
  filterType = 'all';
  selectedDate: string = new Date().toISOString();

  constructor() {
    addIcons({ personCircleOutline, callOutline, logInOutline, logOutOutline });
  }
}