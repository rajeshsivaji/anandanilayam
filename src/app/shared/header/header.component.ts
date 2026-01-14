import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton]
})
export class HeaderComponent {
  @Input() title: string = '';
  
  constructor(public location: Location) {}
}