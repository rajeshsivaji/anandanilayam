import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { shieldOutline, arrowBackOutline, callOutline, timeOutline, addOutline, createOutline, closeOutline, mailOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-guard-list',
  templateUrl: './guard-list.page.html',
  styleUrls: ['./guard-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, CommonModule, FormsModule]
})
export class GuardListPage implements OnInit {
  guards: any[] = [];
  displayedGuards: any[] = [];
  filteredGuards: any[] = [];
  currentIndex = 0;
  batchSize = 5;
  searchTerm = '';
  isModalOpen = false;
  isEditMode = false;
  editIndex = -1;
  guardForm = {
    name: '',
    phone: '',
    email: '',
    shift: '',
    gate: ''
  };

  constructor() {
    addIcons({ shieldOutline, arrowBackOutline, callOutline, timeOutline, addOutline, createOutline, closeOutline, mailOutline, locationOutline });
  }

  ngOnInit() {
    this.generateGuards();
    this.loadInitialGuards();
  }

  generateGuards() {
    const guardNames = ['Rajesh Kumar', 'Suresh Patel', 'Ramesh Singh', 'Mahesh Gupta', 'Dinesh Sharma'];
    const shifts = ['Day Shift (6 AM - 6 PM)', 'Night Shift (6 PM - 6 AM)'];
    const gates = ['Main Gate', 'Side Gate', 'Back Gate'];
    
    for (let i = 0; i < 10; i++) {
      this.guards.push({
        name: guardNames[i % guardNames.length],
        phone: `+91 98765 ${String(11111 + i).padStart(5, '0')}`,
        email: `${guardNames[i % guardNames.length].toLowerCase().replace(' ', '.')}@security.com`,
        shift: shifts[i % 2],
        gate: gates[i % 3]
      });
    }
  }

  loadInitialGuards() {
    this.filteredGuards = [...this.guards];
    this.displayedGuards = this.filteredGuards.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  filterGuards() {
    if (!this.searchTerm.trim()) {
      this.filteredGuards = [...this.guards];
    } else {
      this.filteredGuards = this.guards.filter(guard => 
        guard.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        guard.phone.includes(this.searchTerm) ||
        guard.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        guard.shift.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        guard.gate.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.displayedGuards = this.filteredGuards.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  loadMore(event?: any) {
    const nextBatch = this.filteredGuards.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.displayedGuards = [...this.displayedGuards, ...nextBatch];
    this.currentIndex += this.batchSize;
    
    if (event) {
      event.target.complete();
      if (this.currentIndex >= this.filteredGuards.length) {
        event.target.disabled = true;
      }
    }
  }

  goBack() {
    window.history.back();
  }

  addGuard() {
    this.isEditMode = false;
    this.guardForm = { name: '', phone: '', email: '', shift: '', gate: '' };
    this.isModalOpen = true;
  }

  editGuard(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const guard = this.displayedGuards[index];
    this.guardForm = { ...guard };
    this.isModalOpen = true;
  }

  saveGuard() {
    if (this.isEditMode) {
      const actualIndex = this.guards.findIndex(g => g === this.displayedGuards[this.editIndex]);
      this.guards[actualIndex] = { ...this.guardForm };
    } else {
      this.guards.push({ ...this.guardForm });
    }
    this.filterGuards();
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.guardForm = { name: '', phone: '', email: '', shift: '', gate: '' };
  }
}