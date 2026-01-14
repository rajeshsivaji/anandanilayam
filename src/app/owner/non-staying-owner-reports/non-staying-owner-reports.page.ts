import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-non-staying-owner-reports',
  templateUrl: './non-staying-owner-reports.page.html',
  styleUrls: ['./non-staying-owner-reports.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NonStayingOwnerReportsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
