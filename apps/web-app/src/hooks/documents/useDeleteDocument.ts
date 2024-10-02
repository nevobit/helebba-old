import { deleteDocument } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteDocument = (docType?: string) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: ({id, docType }:{id: string, docType: string}) => deleteDocument(id, docType),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents", docType]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteDocument: mutate }
}