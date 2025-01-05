import { Booking } from './schemas';

export interface CreateBookingDto extends Omit<Booking, 'id' | 'createdAt' | 'updatedAt' | 'status'> { }
export interface UpdateBookingDto extends Partial<Booking> { }
