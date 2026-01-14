import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tenant-visitors',
  templateUrl: './tenant-visitors.page.html',
  styleUrls: ['./tenant-visitors.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TenantVisitorsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
