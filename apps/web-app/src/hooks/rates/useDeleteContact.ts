import { deleteContact as deleteContactApi } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteContact = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn:(id: string) => deleteContactApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contacts"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteContact: mutate }
}