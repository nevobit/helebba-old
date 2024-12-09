import { Collection, getModel } from "@helebba/constant-definitions";
import { BookingLocation, BookingLocationSchemaMongo, Service, ServiceSchemaMongo } from "@helebba/entities";

interface BookingLocationWithServicies extends BookingLocation {
    services: Service[]
}

export const getBookingLocationByHash = async (hash: string): Promise<BookingLocationWithServicies> => {
    const model = getModel<BookingLocation>(Collection.BOOKING_LOCATION, BookingLocationSchemaMongo);
    const bookingLocation = await model.findOne({ hash }) as BookingLocation;

    const modelServices = getModel<Service>(Collection.SERVICES, ServiceSchemaMongo);
    const servcies = await modelServices.find({ account: bookingLocation?.account });


    const bookingLocationWithServicies = {
        ...bookingLocation,
        description: bookingLocation.description,
        name: bookingLocation.name,
        active: bookingLocation.active,
        defaultHeader: bookingLocation.defaultHeader,
        picture: bookingLocation.picture,
        timeSlots: bookingLocation.timeSlots,
        customFields: bookingLocation.customFields,
        services: servcies
    } as BookingLocationWithServicies

    return bookingLocationWithServicies;
}