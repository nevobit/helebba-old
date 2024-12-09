import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBookingLocation } from "../services";
import { useNavigate } from "react-router-dom";

export const useCreateBookingLocation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isPending, mutate } = useMutation({
        mutationFn: createBookingLocation,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["bookings/location"]
            }),
                navigate("/crm/bookings/" + data?.id)

        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createBookingLocation: mutate }
}