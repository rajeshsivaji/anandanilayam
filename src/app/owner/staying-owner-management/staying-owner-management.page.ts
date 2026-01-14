import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-staying-owner-management',
  templateUrl: './staying-owner-management.page.html',
  styleUrls: ['./staying-owner-management.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StayingOwnerManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
