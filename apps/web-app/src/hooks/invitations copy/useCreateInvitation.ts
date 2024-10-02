import { createInvitation } from "@/services/invitations";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateInvitation = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createInvitation,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["invitations"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createInvitation: mutate }
}