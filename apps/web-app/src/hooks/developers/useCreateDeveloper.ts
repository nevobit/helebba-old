import { createDeveloper } from "@/services/developers";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateDeveloper = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: createDeveloper,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["developers"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createDeveloper: mutate }
}