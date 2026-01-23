import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, arrowBackOutline, callOutline, mailOutline, homeOutline, addOutline, createOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.page.html',
  styleUrls: ['./tenant-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, CommonModule, FormsModule]
})
export class TenantListPage implements OnInit {
  tenants: any[] = [];
  displayedTenants: any[] = [];
  filteredTenants: any[] = [];
  currentIndex = 0;
  batchSize = 10;
  searchTerm = '';
  isModalOpen = false;
  isEditMode = false;
  editIndex = -1;
  tenantForm = {
    name: '',
    phone: '',
    email: '',
    plotNo: ''
  };

  constructor() {
    addIcons({ personOutline, arrowBackOutline, callOutline, mailOutline, homeOutline, addOutline, createOutline, closeOutline });
  }

  ngOnInit() {
    this.generateTenants();
    this.loadInitialTenants();
  }

  generateTenants() {
    const tenantNames = ['Alex Johnson', 'Maria Garcia', 'David Wilson', 'Sarah Brown', 'Michael Davis', 'Jennifer Miller', 'Robert Taylor', 'Lisa Anderson', 'James Thomas', 'Amanda White'];
    
    for (let i = 0; i < 50; i++) {
      this.tenants.push({
        name: tenantNames[i % tenantNames.length],
        phone: `+91 98765 ${String(50000 + i).padStart(5, '0')}`,
        email: `${tenantNames[i % tenantNames.length].toLowerCase().replace(' ', '.')}${i > 9 ? i : ''}@email.com`,
        plotNo: `P${String((i % 150) + 1).padStart(3, '0')}`
      });
    }
  }

  loadInitialTenants() {
    this.filteredTenants = [...this.tenants];
    this.displayedTenants = this.filteredTenants.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  filterTenants() {
    if (!this.searchTerm.trim()) {
      this.filteredTenants = [...this.tenants];
    } else {
      this.filteredTenants = this.tenants.filter(tenant => 
        tenant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        tenant.phone.includes(this.searchTerm) ||
        tenant.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        tenant.plotNo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.displayedTenants = this.filteredTenants.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  loadMore(event?: any) {
    const nextBatch = this.filteredTenants.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.displayedTenants = [...this.displayedTenants, ...nextBatch];
    this.currentIndex += this.batchSize;
    
    if (event) {
      event.target.complete();
      if (this.currentIndex >= this.filteredTenants.length) {
        event.target.disabled = true;
      }
    }
  }

  goBack() {
    window.history.back();
  }

  addTenant() {
    this.isEditMode = false;
    this.tenantForm = { name: '', phone: '', email: '', plotNo: '' };
    this.isModalOpen = true;
  }

  editTenant(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const tenant = this.displayedTenants[index];
    this.tenantForm = { ...tenant };
    this.isModalOpen = true;
  }

  saveTenant() {
    if (this.isEditMode) {
      const actualIndex = this.tenants.findIndex(t => t === this.displayedTenants[this.editIndex]);
      this.tenants[actualIndex] = { ...this.tenantForm };
    } else {
      this.tenants.push({ ...this.tenantForm });
    }
    this.filterTenants();
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.tenantForm = { name: '', phone: '', email: '', plotNo: '' };
  }
}