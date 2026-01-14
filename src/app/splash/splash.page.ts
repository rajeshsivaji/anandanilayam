import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule],
})
export class SplashPage implements OnInit {
  currentScreen = 0;
  private slideInterval: any;
  screens = [
    {
      title: 'Welcome to',
      subtitle: 'Ananda Nilaya',
      description: 'Your Premium Gated Community'
    },
    {
      title: 'Secure Living',
      subtitle: 'Safe & Sound',
      description: '24/7 Security & Modern Amenities'
    },
    {
      title: 'Community Life',
      subtitle: 'Connect & Enjoy',
      description: 'Events, Facilities & Neighborhood'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.currentScreen++;
      if (this.currentScreen >= this.screens.length) {
        clearInterval(this.slideInterval);
        this.router.navigate(['/login']);
      }
    }, 2000);
  }

  skipSplash() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.router.navigate(['/login']);
  }
}