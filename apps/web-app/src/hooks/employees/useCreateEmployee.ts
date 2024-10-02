import { createEmployee } from "@/services/employees";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useCreateEmployee = () => {
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