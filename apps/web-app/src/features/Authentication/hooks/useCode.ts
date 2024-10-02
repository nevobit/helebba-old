import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { codeApi } from '../services';
import { PrivateRoutes } from '@/router';

export const useCode = () => {
  const navigate = useNavigate();
  const { isPending: isLogging, mutate: codeVerification, } = useMutation({
    mutationFn: codeApi,
    onSuccess() {
      navigate(PrivateRoutes.ACCOUNTS, { replace: true });
    }
  });

  return { codeVerification, isLogging };
};