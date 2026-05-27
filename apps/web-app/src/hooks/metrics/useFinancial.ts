import { getFinancial } from "@/services";
import { useAccountStore } from "@/state-manager";
import { useQuery } from "@tanstack/react-query";

export const useFinancial = () => {
  const account = useAccountStore((state) => state.account);
  const { isLoading, data: financial } = useQuery({
    queryKey: ["financial", account.id],
    queryFn: () => getFinancial(account.id!),
    enabled: Boolean(account.id),
  });

  return { isLoading, financial };
};
