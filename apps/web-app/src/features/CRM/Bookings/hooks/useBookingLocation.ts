import { BookingLocation } from "@helebba/entities";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";
import { getBookingLocation } from "../services";

interface Result {
    isLoading: boolean,
    isPending: boolean,
    bookingLocation: BookingLocation,
    refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<unknown, Error>>
}

export const useBookingLocation = (): Result => {
    const { id } = useParams();
    const { isLoading, isPending, data: bookingLocation, refetch } = useQuery({
        queryKey: ["booking/location", id],
        queryFn: () => getBookingLocation(id!)
    });

    return { isLoading, isPending, bookingLocation, refetch }
}