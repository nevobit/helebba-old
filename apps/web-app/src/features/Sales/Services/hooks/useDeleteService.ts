import { deleteService as deleteServiceApi } from "../services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteService = (handler?: () => void) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: (id: string) => deleteServiceApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["services"]
            });
            handler?.()
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteService: mutate }
}