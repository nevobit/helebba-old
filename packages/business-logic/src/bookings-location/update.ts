import { Collection, getModel } from '@helebba/constant-definitions';
import {
  BookingLocation,
  BookingLocationSchemaMongo,
  UpdateBookingLocationDto,
} from '@helebba/entities';

export const updateBookingLocation = async (
  id: string,
  data: UpdateBookingLocationDto,
): Promise<Partial<BookingLocation> | null> => {
  const model = getModel<BookingLocation>(Collection.BOOKING_LOCATION, BookingLocationSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update contact');

  const bookingLocation = await model.findById(id);

  return bookingLocation;
};
