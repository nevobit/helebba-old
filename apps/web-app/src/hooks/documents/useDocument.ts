import { getDocument } from '@/services';
import { useAccountStore } from '@/state-manager';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useDocument = () => {
  const account = useAccountStore((state) => state.account);
  const { id, docType } = useParams();

  const {
    isLoading,
    data: document,
    refetch,
  } = useQuery({
    queryKey: ['document', id, docType, account.id],
    queryFn: () => getDocument(id!, docType!, account.id!),
  });

  return { isLoading, document, refetch };
};
