import { updateEmployee } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const  useEditEmployee = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateEmployee,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            });
            queryClient.invalidateQueries({
                queryKey: ["employee"]
            });
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editEmployee: mutate }
}