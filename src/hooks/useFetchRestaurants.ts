import { useEffect, useState } from 'react';

import { get } from '../apis/api';
import Restaurant from '../types/Restaurant';

export interface FetchReturn {
  restaurants: Restaurant[];
  isError: boolean;
}

export default function useFetchRestaurants(): FetchReturn {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await get<Restaurant[]>('localhost:3000', 'restaurants');
        setRestaurants(data);
      } catch (error) {
        setIsError(true);
      }
    }

    fetchData();
  }, []);

  return { restaurants, isError };
}
