import { PrivateRoutes } from '@/constant-definitions';
import { loginApi } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const navigate = useNavigate();
  const { isPending: isLogging,  mutate: login, } = useMutation({
    mutationFn: loginApi,
    onSuccess(){
        navigate(PrivateRoutes.ACCOUNTS, { replace: true });
    }
  });

  return { login, isLogging };
};