import { getRates } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useRates = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: rates } = useQuery({
        queryKey: ["rates", account.id],
        queryFn: () => getRates(account.id!)
    });

    return { isLoading, rates }
}