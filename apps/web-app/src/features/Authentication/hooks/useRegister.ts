import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../services';
import { PrivateRoutes } from '@/router';

export const useRegister = () => {
  const navigate = useNavigate();
  const { isPending: isRegistering, mutate: register, } = useMutation({
    mutationFn: signupApi,
    onSuccess() {
      navigate(PrivateRoutes.CODE, { replace: true });
    }
  });

  return { register, isRegistering };
};