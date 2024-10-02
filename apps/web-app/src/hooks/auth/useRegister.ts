import { PrivateRoutes } from '@/constant-definitions';
import { signupApi } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
    const navigate = useNavigate();
  const { isPending: isRegistering,  mutate: register, } = useMutation({
    mutationFn: signupApi,
    onSuccess(){
        navigate(PrivateRoutes.ACCOUNTS, { replace: true });
    }
  });

  return { register, isRegistering };
};