import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-non-staying-owner-tenant',
  templateUrl: './non-staying-owner-tenant.page.html',
  styleUrls: ['./non-staying-owner-tenant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NonStayingOwnerTenantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
