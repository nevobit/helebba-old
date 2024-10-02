import { acceptInvitation } from '@/services/invitations';
import { useMutation } from '@tanstack/react-query';


export const useAcceptInvitation = () => {
  const { isPending: isLoading, mutate } = useMutation({
    mutationFn: acceptInvitation,
  });

  return { isLoading, acceptInvitation: mutate };
};
