import { updateAccount } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useEditAccount = () => {
    const queryClient = useQueryClient();
    const selectAccount = useAccountStore((state) => state.selectAccount);

    const { isPending, mutate } = useMutation({
        mutationFn: updateAccount,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["account"]
            });
            selectAccount(data)
        },
        onError: (err) => console.log(err)
    })

    return { isEditing: isPending, editAccount: mutate }
}