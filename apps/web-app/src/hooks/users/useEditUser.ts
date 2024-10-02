import { updateUser } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useEditUser = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editUser: mutate }
}