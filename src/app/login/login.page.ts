import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonInput, FormsModule],
})
export class LoginPage {
  mobile = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async sendOtp() {
    if (this.mobile.length === 10) {
      this.isLoading = true;
      
      try {
        const success = await this.authService.sendOtp(this.mobile);
        
        if (success) {
          (document.activeElement as HTMLElement)?.blur();
          this.router.navigate(['/otp-verification'], {
            state: { mobile: this.mobile }
          });
        } else {
          alert('Failed to send OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error in sendOtp:', error);
        alert('Failed to send OTP. Please try again.');
      } finally {
        this.isLoading = false; // Always reset loading state
      }
    }
  }
}