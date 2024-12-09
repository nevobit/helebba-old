import { Collection, getModel } from "@helebba/constant-definitions";
import { BookingLocation, BookingLocationSchemaMongo } from "@helebba/entities";

export const getBookingLocationById = async (id: string): Promise<BookingLocation | null> => {
    const model = getModel<BookingLocation>(Collection.BOOKING_LOCATION, BookingLocationSchemaMongo);
    const bookingLocation = await model.findById(id);
    return bookingLocation;
}