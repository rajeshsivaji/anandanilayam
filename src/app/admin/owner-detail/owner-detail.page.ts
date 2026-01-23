import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, callOutline, mailOutline, arrowBackOutline, homeOutline } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.page.html',
  styleUrls: ['./owner-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonButton, IonIcon, CommonModule, FormsModule]
})
export class OwnerDetailPage implements OnInit {
  ownerInfo = {
    name: '',
    phone: '',
    email: ''
  };
  assignedPlots: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({ personOutline, callOutline, mailOutline, arrowBackOutline, homeOutline });
  }

  ngOnInit() {
    const ownerIndex = parseInt(this.route.snapshot.paramMap.get('ownerIndex') || '0');
    this.loadOwnerDetails(ownerIndex);
  }

  loadOwnerDetails(ownerIndex: number) {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emma', 'Robert', 'Maria', 'James', 'Linda', 'Michael', 'Patricia', 'Christopher', 'Jennifer', 'William', 'Elizabeth', 'Daniel', 'Jessica', 'Matthew', 'Ashley', 'Andrew', 'Amanda', 'Joshua', 'Stephanie', 'Ryan', 'Nicole', 'Brandon', 'Samantha'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Wilson', 'Brown', 'Garcia', 'Anderson', 'White', 'Lee', 'Rodriguez', 'Davis', 'Miller', 'Jones', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Young', 'King', 'Wright', 'Clark', 'Lewis', 'Walker', 'Hall', 'Allen', 'Harris', 'Thompson', 'Green', 'Adams', 'Baker'];
    
    const firstName = firstNames[ownerIndex % firstNames.length];
    const lastName = lastNames[Math.floor(ownerIndex / firstNames.length) % lastNames.length];
    const name = `${firstName} ${lastName}`;
    const phone = `+91 ${98765 + ownerIndex} ${43210 + ownerIndex}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${ownerIndex > 29 ? ownerIndex : ''}@email.com`;
    
    this.ownerInfo = { name, phone, email };
    
    // Find all plots assigned to this owner from the 150 plots
    this.assignedPlots = [];
    for (let plotIndex = 1; plotIndex <= 150; plotIndex++) {
      const plotOwnerIndex = (plotIndex - 1) % 100; // 150 plots distributed among 100 owners
      if (plotOwnerIndex === ownerIndex) {
        this.assignedPlots.push(`P${String(plotIndex).padStart(3, '0')}`);
      }
    }
  }

  goBack() {
    this.router.navigate(['/admin/owner-list']);
  }
}