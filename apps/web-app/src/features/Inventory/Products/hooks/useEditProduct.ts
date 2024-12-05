import { updateProduct } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

export const useEditProduct = () => {
    const { id } = useParams();

    const queryClient = useQueryClient();
    const { isPending, mutate } = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"]
            });
            queryClient.invalidateQueries({
                queryKey: ["product", id]}); 
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editProduct: mutate }
}