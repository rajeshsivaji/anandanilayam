import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-non-staying-owner-property',
  templateUrl: './non-staying-owner-property.page.html',
  styleUrls: ['./non-staying-owner-property.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NonStayingOwnerPropertyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
