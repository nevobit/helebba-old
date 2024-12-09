import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateEmployee } from "../services";

export const useEditEmployee = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            });
            queryClient.invalidateQueries({
                queryKey: ["employee"]
            });
            queryClient.invalidateQueries({
                queryKey: ["employee/me"]
            });
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editEmployee: mutate }
}