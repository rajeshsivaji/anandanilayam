import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, UserRole } from '../services/auth.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, FormsModule, CommonModule],
})
export class OtpVerificationPage {
  otp = '';
  mobile = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.mobile = navigation?.extras?.state?.['mobile'] || '';
  }

  onOtpInput(event: any) {
    const value = event.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    this.otp = value;
    event.target.value = value;
  }

  async verifyOtp() {
    if (this.otp.length === 6) {
      this.isLoading = true;
      
      const userRole: UserRole | null = await this.authService.verifyOtp(this.otp);
      
      if (userRole) {
        this.authService.setCurrentUserRole(userRole.role);
        (document.activeElement as HTMLElement)?.blur();
        const dashboardRoute = this.authService.getDashboardRoute(userRole.role);
        this.router.navigate([dashboardRoute]);
      } else {
        alert('Invalid OTP or user not found. Please try again.');
      }
      
      this.isLoading = false;
    }
  }

  changeNumber() {
    this.router.navigate(['/login']);
  }

  get otpArray(): string[] {
    return this.otp.padEnd(6, ' ').split('');
  }

  get isOtpComplete(): boolean {
    return this.otp.length === 6;
  }
}