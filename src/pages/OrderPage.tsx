import FilterableRestaurantTable from '../components/restaurants/FilterableRestaurantTable';
import Cart from '../components/cart';

function OrderPage() {
  return (
    <div>
      <FilterableRestaurantTable />
      <Cart />
    </div>
  );
}

export default OrderPage;
