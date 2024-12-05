import { deleteProduct as deleteProductApi } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn:(id: string) => deleteProductApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteProduct: mutate }
}