import { getContacts } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query"

export const useReferrals = () => {
  const account = useAccountStore((state) => state.account);
  const { isLoading, data: contacts } = useQuery({
      queryKey: ["contacts"],
      queryFn: () => getContacts(account.id!)
  });

  return { isLoading, contacts }
}
