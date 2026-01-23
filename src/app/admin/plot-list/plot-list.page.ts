import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonIcon, IonButtons, IonButton, IonSearchbar, IonModal, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, arrowBackOutline, addOutline, createOutline, closeOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.page.html',
  styleUrls: ['./plot-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonIcon, IonButtons, IonButton, IonSearchbar, IonModal, IonItem, IonLabel, IonInput, CommonModule, FormsModule]
})
export class PlotListPage implements OnInit {
  plots: {plotNo: string, owner: string}[] = [];
  displayedPlots: {plotNo: string, owner: string}[] = [];
  filteredPlots: {plotNo: string, owner: string}[] = [];
  currentIndex = 0;
  batchSize = 20;
  searchTerm = '';
  isModalOpen = false;
  isEditMode = false;
  editIndex = -1;
  plotForm = {
    plotNo: '',
    owner: ''
  };

  constructor(private router: Router) {
    addIcons({ chevronForwardOutline, arrowBackOutline, addOutline, createOutline, closeOutline });
    this.generatePlots();
    this.loadInitialPlots();
  }

  ngOnInit() {
  }

  generatePlots() {
    const owners = [
      { name: 'John Doe', phone: '+91 98765 43210', email: 'john.doe@email.com' },
      { name: 'Jane Smith', phone: '+91 98765 43211', email: 'jane.smith@email.com' },
      { name: 'Mike Johnson', phone: '+91 98765 43212', email: 'mike.johnson@email.com' },
      { name: 'Sarah Wilson', phone: '+91 98765 43213', email: 'sarah.wilson@email.com' },
      { name: 'David Brown', phone: '+91 98765 43214', email: 'david.brown@email.com' },
      { name: 'Lisa Garcia', phone: '+91 98765 43215', email: 'lisa.garcia@email.com' },
      { name: 'Tom Anderson', phone: '+91 98765 43216', email: 'tom.anderson@email.com' },
      { name: 'Emma White', phone: '+91 98765 43217', email: 'emma.white@email.com' },
      { name: 'Robert Lee', phone: '+91 98765 43218', email: 'robert.lee@email.com' },
      { name: 'Maria Rodriguez', phone: '+91 98765 43219', email: 'maria.rodriguez@email.com' }
    ];

    for (let i = 1; i <= 150; i++) {
      const plotNo = `P${String(i).padStart(3, '0')}`;
      const ownerIndex = (i - 1) % owners.length;
      const owner = owners[ownerIndex].name;
      this.plots.push({ plotNo, owner });
    }
  }

  loadInitialPlots() {
    this.filteredPlots = [...this.plots];
    this.displayedPlots = this.filteredPlots.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  filterPlots() {
    if (!this.searchTerm.trim()) {
      this.filteredPlots = [...this.plots];
    } else {
      this.filteredPlots = this.plots.filter(plot => 
        plot.plotNo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        plot.owner.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.displayedPlots = this.filteredPlots.slice(0, this.batchSize);
    this.currentIndex = this.batchSize;
  }

  loadMore(event: any) {
    setTimeout(() => {
      const nextBatch = this.filteredPlots.slice(this.currentIndex, this.currentIndex + this.batchSize);
      this.displayedPlots.push(...nextBatch);
      this.currentIndex += this.batchSize;
      
      event.target.complete();
      
      if (this.currentIndex >= this.filteredPlots.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  goToPlotDetail(plotNo: string) {
    this.router.navigate(['/admin/plot-detail', plotNo]);
  }

  goBack() {
    window.history.back();
  }

  addPlot() {
    this.isEditMode = false;
    this.plotForm = { plotNo: '', owner: '' };
    this.isModalOpen = true;
  }

  editPlot(index: number, event: Event) {
    event.stopPropagation();
    this.isEditMode = true;
    this.editIndex = index;
    const plot = this.displayedPlots[index];
    this.plotForm = { ...plot };
    this.isModalOpen = true;
  }

  savePlot() {
    if (this.isEditMode) {
      const actualIndex = this.plots.findIndex(p => p === this.displayedPlots[this.editIndex]);
      this.plots[actualIndex] = { ...this.plotForm };
    } else {
      this.plots.push({ ...this.plotForm });
    }
    this.filterPlots();
    this.closeModal();
  }

  closeModal() {
    this.isModalOpen = false;
    this.plotForm = { plotNo: '', owner: '' };
  }
}