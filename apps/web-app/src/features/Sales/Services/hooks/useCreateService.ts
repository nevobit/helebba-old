import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createService } from "../services";

export const useCreateService = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createService,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["services"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createService: mutate }
}