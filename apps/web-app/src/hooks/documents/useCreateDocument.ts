import { createDocument } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateDocument = (docType?: string) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents", docType]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createDocument: mutate }
}