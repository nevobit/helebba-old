import { getEmailsApi } from "@/services"
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useEmails = () => {
    const account = useAccountStore((state) => state.account);
    const { isLoading, data: emails } = useQuery({
        queryKey: ["emails"],
        queryFn: () => getEmailsApi(account.id!)
    });

    return { isLoading, emails }
}