import { useAccountStore } from "@/state-manager";
import { createAccount as createAccountApi } from "../services"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PrivateRoutes } from "@/router";
import { useNavigate } from "react-router-dom";

export const useCreateAccount = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const selectAccount = useAccountStore((state) => state.selectAccount);

    const { isPending, mutate } = useMutation({
        mutationFn: createAccountApi,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["accounts"]
            });
            selectAccount(data)
            navigate(PrivateRoutes.HOME, { replace: true });

        },
        onError: (err) => console.log(err)
    })

    return { isCreating: isPending, createAccount: mutate }
}