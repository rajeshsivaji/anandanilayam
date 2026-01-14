import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.page.html',
  styleUrls: ['./tenant-home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TenantHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
