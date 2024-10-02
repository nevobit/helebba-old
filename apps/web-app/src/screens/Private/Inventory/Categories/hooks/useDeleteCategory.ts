import { deleteCategory } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteCategory: mutate }
}