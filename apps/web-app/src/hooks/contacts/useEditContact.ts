import { updateContact } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useEditContact = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateContact,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contacts"]
            });
            queryClient.invalidateQueries({
                queryKey: ["contact"]
            });
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editContact: mutate }
}