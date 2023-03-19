import Food from './Food';

interface Restaurant {
  id: number;
  category: string;
  name: string;
  menu: Food[];
}

export default Restaurant;
