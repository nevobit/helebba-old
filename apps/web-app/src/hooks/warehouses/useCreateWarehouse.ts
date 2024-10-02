import { createWarehouse } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateWarehouse = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createWarehouse,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createWarehouse: mutate }
}