import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginGoogle as loginGoogleApi } from '../services';

export const useLoginGoogle = () => {
  const navigate = useNavigate();

  const { isPending: isLoggingGoogle, mutate: loginGoogle, } = useMutation({
    mutationFn: loginGoogleApi,
    onSuccess() {
      navigate("/accounts");
    }
  });

  return { loginGoogle, isLoggingGoogle };
};