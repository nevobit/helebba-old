import { BookingLocation } from "./schemas";

export interface CreateBookingLocationDto extends Omit<BookingLocation, 'id' | 'createdAt' | 'updatedAt' | 'status'> { }
export interface UpdateBookingLocationDto extends Partial<BookingLocation> { }