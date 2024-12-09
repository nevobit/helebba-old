import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"
import { getBookingsLocation } from "../services";

export const useBookingsLocation = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: bookingsLocatios } = useQuery({
        queryKey: ["bookings/location"],
        queryFn: () => getBookingsLocation(account.id!)
    });

    return { isLoading, bookingsLocatios }
}