import { updateCategory } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

export const useEditCategory = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
            queryClient.invalidateQueries({
                queryKey: ["category", id],
            })


        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editCategory: mutate }
}