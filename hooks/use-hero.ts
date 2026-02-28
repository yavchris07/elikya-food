// hooks/useUsers.js
import useSWR from 'swr';

// Le "fetcher" est une simple fonction qui appelle votre API
const fetcher = (url:string) => fetch(url).then((res) => res.json());

export function useHero() {
  const { data, error, isLoading, mutate } = useSWR('/api/hero', fetcher);

  return {
    hero: data,
    isLoading,
    isError: error,
    refresh: mutate
  };
}