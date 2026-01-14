import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-staying-owner-visitors',
  templateUrl: './staying-owner-visitors.page.html',
  styleUrls: ['./staying-owner-visitors.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StayingOwnerVisitorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
