import { useQuery } from 'react-query';
import { useApi } from 'shared/hooks';

export const useChangePassword = (params: { toEmail: string }) => {
  const api = useApi();
  return useQuery(
    'change-password-request',
    () =>
      api.get('/auth/reset-password', {
        params,
      }),
    {
      onSuccess: (res: any) => console.log('res :>> ', res),
      refetchOnMount: false,
      retry: false,
      enabled: false,
    },
  );
};
