import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom";
import { updateBookingLocation } from "../services";

export const useEditBookingLocation = (handler?: () => void) => {
    const { id } = useParams();
    console.log(id)
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateBookingLocation,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["bookings/location"]
            });
            queryClient.invalidateQueries({
                queryKey: ["booking/location", id]
            });
            handler?.()
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editBookingLocation: mutate }
}