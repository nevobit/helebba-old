import { deleteEmployee as deleteEmployeeApi,  } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useDeleteEmployee = () => {
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn:(id: string) => deleteEmployeeApi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            })
        },
        onError: (err) => console.log(err)
    })

    return { isDeleting: isPending, deleteEmployee: mutate }
}