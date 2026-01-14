import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-staying-owner-home',
  templateUrl: './staying-owner-home.page.html',
  styleUrls: ['./staying-owner-home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StayingOwnerHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
