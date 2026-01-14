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
    if (otp.length === 6) {
      const mobile = this.currentMobile || localStorage.getItem('loginMobile') || '';
      
      try {
        const response = await fetch(`http://localhost:3000/users?mobile=${mobile}`);
        const users = await response.json();
        
        if (users.length > 0) {
          const user = users[0];
          const roleMap: { [key: string]: 'admin' | 'security' | 'tenant' | 'staying_owner' | 'not_staying_owner' } = {
            'ADMIN': 'admin',
            'SECURITY': 'security',
            'TENANT': 'tenant',
            'OWNER_STAYING': 'staying_owner',
            'OWNER_NON_STAYING': 'not_staying_owner'
          };
          
          localStorage.removeItem('loginMobile');
          return {
            mobile: user.mobile,
            role: roleMap[user.role] || 'admin',
            name: user.name,
            flatNumber: user.plotNo
          };
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        console.log('Make sure JSON server is running: npm run json-server');
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