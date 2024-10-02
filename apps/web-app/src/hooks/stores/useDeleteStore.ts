import { deleteStore as deleteStoreApi} from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteStore = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn:deleteStoreApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["stores"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteStore: mutate }
}