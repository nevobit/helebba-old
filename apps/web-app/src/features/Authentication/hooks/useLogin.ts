import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../services';
import { PrivateRoutes } from '@/router';

export const useLogin = () => {
  const navigate = useNavigate();
  const { isPending: isLogging, mutate: login, } = useMutation({
    mutationFn: loginApi,
    onSuccess() {
      navigate(PrivateRoutes.CODE, { replace: true });
    }
  });

  return { login, isLogging };
};