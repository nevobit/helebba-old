import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEmployee } from "../services";

export const useCreateEmployee = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createEmployee: mutate }
}