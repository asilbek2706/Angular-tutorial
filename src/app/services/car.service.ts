import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Singleton pattern: the service will be available throughout the application
})
export class CarService {
  private reservations: Reservation[] = [];
  private http = inject(HttpClient); // Inject HttpClient for potential future use
  private apiUrl = 'http://localhost:3000'; // Base URL for API endpoints

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservations`, reservation);
  }

  deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  updateReservation(id: number, updatedReservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/reservations/${id}`, updatedReservation);
  }
}
