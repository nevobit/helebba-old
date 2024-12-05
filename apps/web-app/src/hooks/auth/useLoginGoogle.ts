import { PrivateRoutes } from '@/constant-definitions';
import { loginGoogle as loginGoogleApi } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLoginGoogle = () => {
  const navigate = useNavigate();

  const { isPending: isLoggingGoogle,  mutate: loginGoogle, } = useMutation({
    mutationFn: loginGoogleApi,
    onSuccess() {
      console.log('Enter here')
        navigate(PrivateRoutes.ACCOUNTS, { replace: true });
    }
  });

  return { loginGoogle, isLoggingGoogle };
};