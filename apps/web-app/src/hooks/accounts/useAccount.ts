import { getAccount } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useAccount = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: accountData } = useQuery({
        queryKey: ["account", account.id],
        queryFn: () => getAccount(account.id!)
    });

    return { isLoading, account: accountData }
}