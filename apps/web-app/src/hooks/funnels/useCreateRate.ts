import { createRate } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useCreateRate = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createRate,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["rates"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createRate: mutate }
}