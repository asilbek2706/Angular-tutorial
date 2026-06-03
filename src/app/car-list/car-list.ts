import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Reservation } from '../models/reservation';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './car-list.html',
  styleUrls: ['./car-list.css'],
  standalone: true,
})
export class CarList implements OnInit {
  reservationList: Reservation[] = [];
  reservationService = inject(CarService);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe({
      next: (data: Reservation[]) => {
        this.reservationList = data;
        this.cdr.detectChanges(); // Manually trigger change detection to update the view
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      },
    })
  }

  deleteReservation(reservation: Reservation): void {
      this.reservationService.deleteReservation(Number(reservation.id)).subscribe({
        next: () => {
          this.loadReservations(); // Refresh the list after deletion
        },
        error: (error) => {
          throw new Error(`Error deleting reservation: ${error.message}`);
        },
      });
  }
}
