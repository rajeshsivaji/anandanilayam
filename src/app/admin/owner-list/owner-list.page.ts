import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, arrowBackOutline, callOutline, mailOutline, chevronForwardOutline, addOutline, createOutline, closeOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.page.html',
  styleUrls: ['./owner-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, CommonModule, FormsModule]
})
export class OwnerListPage implements OnInit {
  owners: {name: string, phone: string, email: string}[] = [];
  displayedOwners: {name: string, phone: string, email: string}[] = [];
  filteredOwners: {name: string, phone: string, email: string}[] = [];
  currentIndex = 0;
  batchSize = 10;
  searchTerm = '';
  isModalOpen = false;
  isEditMode = false;
  editIndex = -1;
  ownerForm = {
    name: '',
    phone: '',
    email: ''
  };

  constructor(private router: Router) {
    addIcons({ personOutline, arrowBackOutline, callOutline, mailOutline, chevronForwardOutline, addOutline, createOutline, closeOutline });
    this.generateOwners();
    this.loadInitialOwners();
  }

  ngOnInit() {
  }

  generateOwners() {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Tom', 'Emma', 'Robert', 'Maria', 'James', 'Linda', 'Michael', 'Patricia', 'Christopher', 'Jennifer', 'William', 'Elizabeth', 'Daniel', 'Jessica', 'Matthew', 'Ashley', 'Andrew', 'Amanda', 'Joshua', 'Stephanie', 'Ryan', 'Nicole', 'Brandon', 'Samantha'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Wilson', 'Brown', 'Garcia', 'Anderson', 'White', 'Lee', 'Rodriguez', 'Davis', 'Miller', 'Jones', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Young', 'King', 'Wright', 'Clark', 'Lewis', 'Walker', 'Hall', 'Allen', 'Harris', 'Thompson', 'Green', 'Adams', 'Baker'];
    
    for (let i = 0; i < 100; i++) {
      const firstName = firstNames[i % firstNames.length];
      const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
      const name = `${firstName} ${lastName}`;
      const phone = `+91 ${98765 + i} ${43210 + i}`;
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i > 29 ? i : ''}@email.com`;
      
      this.owners.push({ name, phone, email });
    }
  }

  loadInitialOwners() {
    this.filteredOwners = [...this.owners];
    this.displayedOwners = this.filteredOwners.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  filterOwners() {
    if (!this.searchTerm.trim()) {
      this.filteredOwners = [...this.owners];
    } else {
      this.filteredOwners = this.owners.filter(owner => 
        owner.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        owner.phone.includes(this.searchTerm) ||
        owner.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.displayedOwners = this.filteredOwners.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  loadMore(event: any) {
    setTimeout(() => {
      const nextBatch = this.filteredOwners.slice(this.currentIndex, this.currentIndex + this.batchSize);
      this.displayedOwners.push(...nextBatch);
      this.currentIndex += this.batchSize;
      
      event.target.complete();
      
      if (this.currentIndex >= this.filteredOwners.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  goBack() {
    window.history.back();
  }

  goToOwnerDetail(index: number) {
    this.router.navigate(['/admin/owner-detail', index]);
  }

  addOwner() {
    this.isEditMode = false;
    this.ownerForm = { name: '', phone: '', email: '' };
    this.isModalOpen = true;
  }

  editOwner(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const owner = this.displayedOwners[index];
    this.ownerForm = { ...owner };
    this.isModalOpen = true;
  }

  saveOwner() {
    if (this.isEditMode) {
      const actualIndex = this.owners.findIndex(o => o === this.displayedOwners[this.editIndex]);
      this.owners[actualIndex] = { ...this.ownerForm };
    } else {
      this.owners.push({ ...this.ownerForm });
    }
    this.filterOwners();
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.ownerForm = { name: '', phone: '', email: '' };
  }
}