// hooks/useUsers.js
import useSWR from 'swr';

// Le "fetcher" est une simple fonction qui appelle votre API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useUsers() {
  const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
    refresh: mutate
  };
}