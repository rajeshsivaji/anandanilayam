import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'otp-verification',
    loadComponent: () => import('./otp-verification/otp-verification.page').then(m => m.OtpVerificationPage)
  },
  {
    path: 'security',
    loadComponent: () => import('./security/security.page').then(m => m.SecurityPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./security/security-home/security-home.page').then(m => m.HomePage)
      },
      {
        path: 'entry',
        loadComponent: () => import('./security/security-entry/security-entry.page').then(m => m.EntryPage)
      },
      {
        path: 'logs',
        loadComponent: () => import('./security/security-logs/security-logs.page').then(m => m.LogsPage)
      },
      {
        path: 'emergency',
        loadComponent: () => import('./security/security-emergency/security-emergency.page').then(m => m.EmergencyPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./security/security-profile/security-profile.page').then(m => m.SecurityProfilePage)
      },
      {
        path: 'walkin-entry',
        loadComponent: () => import('./security/walkin-entry/walkin-entry.page').then(m => m.WalkinEntryPage)
      }
    ]
  },
  {
    path: 'security-profile',
    loadComponent: () => import('./security/security-profile/security-profile.page').then( m => m.SecurityProfilePage)
  },
  {
    path: 'tenant',
    loadComponent: () => import('./tenant/tenant/tenant.page').then(m => m.TenantPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./tenant/tenant-home/tenant-home.page').then(m => m.TenantHomePage)
      },
      {
        path: 'visitors',
        loadComponent: () => import('./tenant/tenant-visitors/tenant-visitors.page').then(m => m.TenantVisitorsPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./tenant/tenant-profile/tenant-profile.page').then(m => m.TenantProfilePage)
      }
    ]
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin/admin.page').then(m => m.AdminPage),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/admin-dashboard/admin-dashboard.page').then(m => m.AdminDashboardPage)
      },
      {
        path: 'users',
        loadComponent: () => import('./admin/admin-users/admin-users.page').then(m => m.AdminUsersPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./admin/admin-settings/admin-settings.page').then(m => m.AdminSettingsPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./admin/admin-profile/admin-profile.page').then(m => m.AdminProfilePage)
      }
    ]
  },
  {
    path: 'staying-owner',
    loadComponent: () => import('./owner/staying-owner/staying-owner.page').then(m => m.StayingOwnerPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./owner/staying-owner-home/staying-owner-home.page').then(m => m.StayingOwnerHomePage)
      },
      {
        path: 'visitors',
        loadComponent: () => import('./owner/staying-owner-visitors/staying-owner-visitors.page').then(m => m.StayingOwnerVisitorsPage)
      },
      {
        path: 'management',
        loadComponent: () => import('./owner/staying-owner-management/staying-owner-management.page').then(m => m.StayingOwnerManagementPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./owner/staying-owner-profile/staying-owner-profile.page').then(m => m.StayingOwnerProfilePage)
      }
    ]
  },
  {
    path: 'non-staying-owner',
    loadComponent: () => import('./owner/non-staying-owner/non-staying-owner.page').then(m => m.NonStayingOwnerPage),
    children: [
      {
        path: '',
        redirectTo: 'property',
        pathMatch: 'full'
      },
      {
        path: 'property',
        loadComponent: () => import('./owner/non-staying-owner-property/non-staying-owner-property.page').then(m => m.NonStayingOwnerPropertyPage)
      },
      {
        path: 'tenant',
        loadComponent: () => import('./owner/non-staying-owner-tenant/non-staying-owner-tenant.page').then(m => m.NonStayingOwnerTenantPage)
      },
      {
        path: 'reports',
        loadComponent: () => import('./owner/non-staying-owner-reports/non-staying-owner-reports.page').then(m => m.NonStayingOwnerReportsPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./owner/non-staying-owner-profile/non-staying-owner-profile.page').then(m => m.NonStayingOwnerProfilePage)
      }
    ]
  },
  {
    path: 'admin-profile',
    loadComponent: () => import('./admin/admin-profile/admin-profile.page').then( m => m.AdminProfilePage)
  }
];