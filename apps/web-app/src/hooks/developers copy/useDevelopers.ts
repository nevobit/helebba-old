import { getDevelopers } from "@/services/developers";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useDevelopers = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: developers } = useQuery({
        queryKey: ["developers", account.id],
        queryFn: () => getDevelopers(account.id!)
    });

    return { isLoading, developers }
}