import { deleteContact as deleteContactApi } from "../services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteContact = (handler?: () => void) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: (id: string) => deleteContactApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contacts"]
            });
            handler?.()
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteContact: mutate }
}