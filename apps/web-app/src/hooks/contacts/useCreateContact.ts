import { createContact } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useCreateContact = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createContact,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contacts"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createContact: mutate }
}