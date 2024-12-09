import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateService } from "../services";

export const useEditService = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateService,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["services"]
            });
            queryClient.invalidateQueries({
                queryKey: ["service"]
            });
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editService: mutate }
}