import { post } from '../apis/api';
import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

export default async function useFetchCreateOrder(menu: Food[]):Promise<number> {
  const totalPrice = calculateTotalPrice(menu);

  try {
    const response = await post<{ menu: Food[], totalPrice: number }, { id: number }>('localhost:3000', 'orders', { menu, totalPrice });
    const { id } = response;

    return id;
  } catch (error) {
    throw new Error('Failed to create order');
  }
}
