import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, resizeOutline, checkmarkCircleOutline, cardOutline, arrowBackOutline, callOutline, mailOutline } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.page.html',
  styleUrls: ['./plot-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButtons, IonButton, IonIcon, CommonModule, FormsModule]
})
export class PlotDetailPage implements OnInit {
  plotNo = '';
  ownerInfo = {
    name: '',
    phone: '',
    email: ''
  };
  tenantInfo = {
    name: '',
    phone: '',
    email: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({ personOutline, resizeOutline, checkmarkCircleOutline, cardOutline, arrowBackOutline, callOutline, mailOutline });
  }

  ngOnInit() {
    this.plotNo = this.route.snapshot.paramMap.get('plotNo') || '';
    this.loadPlotDetails(this.plotNo);
  }

  loadPlotDetails(plotNo: string) {
    const ownerData = this.getOwnerForPlot(plotNo);
    const tenantData = this.getTenantForPlot(plotNo);
    
    this.ownerInfo = ownerData;
    this.tenantInfo = tenantData;
  }

  getOwnerForPlot(plotNo: string) {
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
    const plotNumber = parseInt(plotNo.substring(1));
    const index = (plotNumber - 1) % owners.length;
    return owners[index];
  }

  getTenantForPlot(plotNo: string) {
    const tenants = [
      { name: 'Alice Cooper', phone: '+91 87654 32109', email: 'alice.cooper@email.com' },
      { name: 'Bob Martin', phone: '+91 87654 32108', email: 'bob.martin@email.com' },
      { name: 'Carol White', phone: '+91 87654 32107', email: 'carol.white@email.com' },
      { name: 'Dan Green', phone: '+91 87654 32106', email: 'dan.green@email.com' },
      { name: 'Eva Black', phone: '+91 87654 32105', email: 'eva.black@email.com' }
    ];
    const index = parseInt(plotNo.substring(1)) % tenants.length;
    return tenants[index];
  }

  goBack() {
    this.router.navigate(['/admin/plot-list']);
  }
}