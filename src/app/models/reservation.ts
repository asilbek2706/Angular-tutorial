export interface Reservation {
    id: number | string;
    checkIn: Date;
    checkOut: Date;
    clientName: string;
    clientEmail: string;
    carModel: string;
    carNumber: number;
}
