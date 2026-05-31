import { Component, inject, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.reservationList = this.reservationService.getReservations();
  }

  deleteReservation(reservation: Reservation): void {
      this.reservationService.deleteReservation(reservation.id);
      this.reservationList = this.reservationService.getReservations();
    
  }
}
