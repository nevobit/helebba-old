import { createStore } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateStore = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createStore,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["stores"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createStore: mutate }
}