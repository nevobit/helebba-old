import { deleteEmployee as deleteEmployeeApi } from "../services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteContact = (handler?: () => void) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: (id: string) => deleteEmployeeApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            });
            handler?.()
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteContact: mutate }
}