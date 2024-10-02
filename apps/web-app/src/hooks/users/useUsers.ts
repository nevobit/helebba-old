import { getUsers } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useUsers = () => {
    const account = useAccountStore((state) => state.account);
    console.log({account})
    const { isLoading, data: users } = useQuery({
        queryKey: ["users/account", account.id],
        queryFn: () => getUsers(account.id!)
    });

    return { isLoading, users }
}