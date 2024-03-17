import Restaurant from '../types/Restaurant';

import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  if (!restaurants) {
    return (<p>loading...</p>);
  }

  return (
    <div>
      <table>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
