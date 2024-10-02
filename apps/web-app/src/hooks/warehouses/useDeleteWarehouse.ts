import { deleteWarehouse } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteWarehouse = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: deleteWarehouse,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteWarehouse: mutate }
}