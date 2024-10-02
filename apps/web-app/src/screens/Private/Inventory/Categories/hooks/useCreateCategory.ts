import { createCategory as createCategoryApi } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateCategory = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createCategory: mutate }
}