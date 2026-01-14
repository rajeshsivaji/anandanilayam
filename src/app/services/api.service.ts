import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getUserByMobile(mobile: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users?mobile=${mobile}`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  // Notices
  getNotices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/notices`);
  }

  addNotice(notice: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/notices`, notice);
  }

  // Complaints
  getComplaints(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/complaints`);
  }

  getComplaintsByPlot(plotNo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/complaints?plotNo=${plotNo}`);
  }

  addComplaint(complaint: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/complaints`, complaint);
  }

  updateComplaint(id: number, complaint: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/complaints/${id}`, complaint);
  }

  // Maintenance Bills
  getMaintenanceBills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/maintenanceBills`);
  }

  getBillsByPlot(plotNo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/maintenanceBills?plotNo=${plotNo}`);
  }

  // Payments
  getPayments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/payments`);
  }

  getPaymentsByPlot(plotNo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/payments?plotNo=${plotNo}`);
  }

  addPayment(payment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/payments`, payment);
  }

  // Visitors
  getVisitors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/visitors`);
  }

  getVisitorsByPlot(plotNo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/visitors?plotNo=${plotNo}`);
  }

  addVisitor(visitor: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/visitors`, visitor);
  }

  updateVisitor(id: number, visitor: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/visitors/${id}`, visitor);
  }
}