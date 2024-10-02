import { createDocument } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateDocument = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createDocument: mutate }
}