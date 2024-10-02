import { sendDocument } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useSendDocument = (docType?: string) => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: sendDocument,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents/send", docType]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isSending: isPending, sendDocument: mutate }
}