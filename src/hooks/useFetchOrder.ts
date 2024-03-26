import { useEffect, useState } from 'react';
import { get } from '../apis/api';
import Order from '../types/Order';

export default function useFetchOrder(orderId: string) {
  const [data, setData] = useState({} as Order);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const { order } = await get<{order: Order}>('localhost:3000', `orders/${orderId}`);

        setData(order);
      } catch (error) {
        throw new Error('Failed to fetch order');
      }
    }

    fetchOrder();
  }, [orderId]);

  return data;
}
