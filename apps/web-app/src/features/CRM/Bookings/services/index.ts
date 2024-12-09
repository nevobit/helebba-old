import { helebbaApi } from '@/api';
import { CreateBookingLocationDto, UpdateBookingLocationDto } from '@helebba/entities';

export const updateBookingLocation = async (bookingLocation: UpdateBookingLocationDto) => {
    const { data } = await helebbaApi.patch(`/bookings/location/${bookingLocation.id}`, bookingLocation);
    return data;
};

export const createBookingLocation = async ({
    account,
    bookingLocation }: { account: string, bookingLocation: CreateBookingLocationDto }
) => {
    const { data } = await helebbaApi.post(`/bookings/location`, bookingLocation, {
        headers: {
            account,
        },
    });
    return data;
};

export const getBookingsLocation = async (id: string) => {
    const { data } = await helebbaApi.get(`/bookings/location`, {
        headers: {
            account: id,
        },
    });
    return data;
};

export const getBookingLocation = async (id: string) => {
    const { data } = await helebbaApi.get(`/bookings/location/${id}`);
    return data;
};


export const deleteContact = async (id: string) => {
    const { data } = await helebbaApi.get(`/bookings/location/${id}/delete`);
    return data;
}