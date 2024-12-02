import { useMutation } from '@tanstack/react-query';
import { loginGoogle as loginGoogleApi } from '../services';

export const useLoginGoogle = () => {

  const { isPending: isLoggingGoogle, mutate: loginGoogle, } = useMutation({
    mutationFn: loginGoogleApi,
    onSuccess() {
      console.log("enter jere")
      window.location.href = "/accounts";
    }
  });

  return { loginGoogle, isLoggingGoogle };
};