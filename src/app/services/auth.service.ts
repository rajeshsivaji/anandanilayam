import { Injectable } from '@angular/core';

export interface UserRole {
  mobile: string;
  role: 'admin' | 'security' | 'tenant' | 'staying_owner' | 'not_staying_owner';
  name: string;
  flatNumber?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentMobile: string = '';

  constructor() {}

  async sendOtp(phoneNumber: string): Promise<boolean> {
    this.currentMobile = phoneNumber;
    localStorage.setItem('loginMobile', phoneNumber);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  async verifyOtp(otp: string): Promise<UserRole | null> {
    if (otp === '123456') {
      const mobile = this.currentMobile || localStorage.getItem('loginMobile') || '';
      
      // Mock users for offline testing
      const mockUsers: { [key: string]: UserRole } = {
        '9999999999': { mobile, role: 'admin', name: 'Admin User' },
        '8888888888': { mobile, role: 'security', name: 'Security Guard' },
        '7777777777': { mobile, role: 'staying_owner', name: 'Rajesh Kumar', flatNumber: '10' },
        '6666666666': { mobile, role: 'tenant', name: 'Tenant Kumar', flatNumber: '11' },
        '5555555555': { mobile, role: 'not_staying_owner', name: 'Saidevi Reddy', flatNumber: '11' }
      };
      
      if (mockUsers[mobile]) {
        localStorage.removeItem('loginMobile');
        return mockUsers[mobile];
      }
    }
    return null;
  }

  private getMockUser(mobile: string): UserRole {
    const mockUsers: { [key: string]: UserRole } = {
      '9876543210': { mobile, role: 'admin', name: 'Admin User' },
      '9876543211': { mobile, role: 'security', name: 'Security Guard' },
      '9876543212': { mobile, role: 'tenant', name: 'John Tenant', flatNumber: 'A-101' },
      '9876543213': { mobile, role: 'staying_owner', name: 'Owner Resident', flatNumber: 'B-202' },
      '9876543214': { mobile, role: 'not_staying_owner', name: 'Owner Non-Resident', flatNumber: 'C-303' }
    };
    
    return mockUsers[mobile] || { mobile, role: 'admin', name: 'Default User' };
  }

  getDashboardRoute(role: string): string {
    switch (role) {
      case 'admin':
        return '/admin';
      case 'security':
        return '/security';
      case 'tenant':
        return '/tenant';
      case 'staying_owner':
        return '/staying-owner';
      case 'not_staying_owner':
        return '/non-staying-owner';
      default:
        return '/login';
    }
  }

  getCurrentUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  setCurrentUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }
}