import { getDocuments } from '@/services';
import { useAccountStore } from '@/state-manager';
import { useQuery } from '@tanstack/react-query';

export const useDocuments = (docType: string) => {
  const account = useAccountStore((state) => state.account);
  const { isLoading, data: documents } = useQuery({
    queryKey: ['documents', docType],
    queryFn: () => getDocuments(account.id!, docType),
  });

  return { isLoading, documents };
};
