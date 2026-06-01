import { inject, Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Singleton pattern: the service will be available throughout the application
})
export class CarService {
  private reservations: Reservation[] = [];
  private http = inject(HttpClient); // Inject HttpClient for potential future use

  constructor() {
    const savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: number): Reservation | undefined {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter((reservation) => reservation.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: number, updatedReservation: Reservation): void {
    this.reservations = this.reservations.map((item) => {
      if (item.id === id) {
        return updatedReservation;
      }
      return item;
    });
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
