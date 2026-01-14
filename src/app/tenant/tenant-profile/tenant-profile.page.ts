import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tenant-profile',
  templateUrl: './tenant-profile.page.html',
  styleUrls: ['./tenant-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TenantProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
