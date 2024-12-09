import { Collection, getModel } from "@helebba/constant-definitions";
import { BookingLocationSchemaMongo, CreateBookingLocationDto, StatusType } from "@helebba/entities";

export const createBookingLocation = async (bookingLocation: CreateBookingLocationDto) => {
    const model = getModel(Collection.BOOKING_LOCATION, BookingLocationSchemaMongo)
    const createdBookingLocation = new model({
        ...bookingLocation, status: StatusType.ACTIVE, customFields: [
            {
                key: 'name',
                label: 'Nombre',
                type: 'text',
                required: 'true',
                scopes: null,
                options: null
            },
            {
                key: 'email',
                label: 'Correo',
                type: 'email',
                required: 'true',
                scopes: null,
                options: null
            }
        ]
    });
    await createdBookingLocation.save()
    return createdBookingLocation;
}
