import { createProduct } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createProduct: mutate }
}