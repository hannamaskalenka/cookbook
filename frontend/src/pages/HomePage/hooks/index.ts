/* eslint-disable import/prefer-default-export */
import { useMutation, useQuery } from 'react-query';
import { useApi } from 'shared/hooks';

export const useLoginUser = (setToken: any) => {
  const api = useApi();
  return useMutation(
    (user: { username: string; password: string }) => {
      return api.post('auth/login', user);
    },
    {
      onSuccess: (res) => setToken(res?.data?.access_token),
    },
  );
};

export const useGetRecipes = (token: string) => {
  const api = useApi();
  return useQuery(
    'recipes',
    () => {
      return api.get('/recipes', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    },
    {
      enabled: false,
      refetchOnMount: false,
      retry: false,
      select: (data) => data.data,
    },
  );
};
