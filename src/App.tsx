import Restaurants from './components/Restaurants';
import Cart from './components/Cart';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>어서오세요, 메가의 민족입니다</h1>
      <Restaurants restaurants={restaurants} />
      <Cart />
    </div>
  );
}
