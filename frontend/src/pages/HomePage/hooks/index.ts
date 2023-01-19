/* eslint-disable import/prefer-default-export */
import { useMutation, useQuery } from 'react-query';
import useAuthContext from 'shared/contexts/AuthContext';
import { useApi } from 'shared/hooks';

export const useLoginUser = () => {
  const { setAuth } = useAuthContext();
  const api = useApi();
  return useMutation(
    (user: { username: string; password: string }) => {
      return api.post('auth/login', user);
    },
    {
      onSuccess: (res) => {
        return setAuth({
          username: JSON.parse(res?.config?.data)?.username,
          token: res?.data?.access_token,
        });
      },
    },
  );
};

export const useGetRecipes = () => {
  const {
    auth: { token },
  } = useAuthContext();
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
      select: (data) => data.data?.results || [],
    },
  );
};
