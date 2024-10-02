import { updateWarehouse } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useEditWarehouse = (id: string) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateWarehouse,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"]
            })
            queryClient.invalidateQueries({
                queryKey: ["warehouse", id],
            })


        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editWarehouse: mutate }
}