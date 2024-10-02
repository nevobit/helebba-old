import { createAccount as createAccountApi } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useCreateAccount = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createAccountApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["accounts"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createAccount: mutate }
}