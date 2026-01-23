import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, addOutline, createOutline, closeOutline, documentTextOutline } from 'ionicons/icons';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButtons, IonButton, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, IonTextarea, CommonModule, FormsModule]
})
export class NoticeListPage implements OnInit {
  notices: any[] = [];
  displayedNotices: any[] = [];
  filteredNotices: any[] = [];
  currentIndex = 0;
  batchSize = 10;
  searchTerm = '';
  isModalOpen = false;
  isEditMode = false;
  editIndex = -1;
  noticeForm = {
    title: '',
    date: '',
    description: ''
  };

  constructor() {
    addIcons({ arrowBackOutline, addOutline, createOutline, closeOutline, documentTextOutline });
  }

  ngOnInit() {
    this.generateNotices();
    this.loadInitialNotices();
  }

  generateNotices() {
    const noticeTitles = [
      'Monthly Maintenance Fee Due',
      'Water Supply Maintenance',
      'Security Guidelines Update',
      'Parking Rules Reminder',
      'Festival Celebration Notice'
    ];
    
    for (let i = 0; i < 15; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i * 2);
      
      this.notices.push({
        title: noticeTitles[i % noticeTitles.length],
        date: date.toISOString().split('T')[0],
        description: `This is a detailed description for ${noticeTitles[i % noticeTitles.length]}. Please read carefully and follow the instructions.`
      });
    }
  }

  loadInitialNotices() {
    this.filteredNotices = [...this.notices];
    this.displayedNotices = this.filteredNotices.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  filterNotices() {
    if (!this.searchTerm.trim()) {
      this.filteredNotices = [...this.notices];
    } else {
      this.filteredNotices = this.notices.filter(notice => 
        notice.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        notice.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.displayedNotices = this.filteredNotices.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  loadMore(event?: any) {
    const nextBatch = this.filteredNotices.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.displayedNotices = [...this.displayedNotices, ...nextBatch];
    this.currentIndex += this.batchSize;
    
    if (event) {
      event.target.complete();
      if (this.currentIndex >= this.filteredNotices.length) {
        event.target.disabled = true;
      }
    }
  }

  goBack() {
    window.history.back();
  }

  addNotice() {
    this.isEditMode = false;
    this.noticeForm = { title: '', date: '', description: '' };
    this.isModalOpen = true;
  }

  editNotice(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const notice = this.displayedNotices[index];
    this.noticeForm = { ...notice };
    this.isModalOpen = true;
  }

  saveNotice() {
    if (this.isEditMode) {
      const actualIndex = this.notices.findIndex(n => n === this.displayedNotices[this.editIndex]);
      this.notices[actualIndex] = { ...this.noticeForm };
    } else {
      this.notices.unshift({ ...this.noticeForm });
    }
    this.filterNotices();
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.noticeForm = { title: '', date: '', description: '' };
  }
}