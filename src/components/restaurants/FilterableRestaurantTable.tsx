import { useState } from 'react';

// import Restaurant from '../../types/Restaurant';
// import useFetch from '../../hooks/useFetch';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import extractCategories from '../../utils/extractCategories';
import filterRestaurants from '../../utils/filterRestaurants';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';

function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  // const {
  //   data: { restaurants = [] },
  // } = useFetch<{restaurants: Restaurant[]}>('http://localhost:3000/restaurants');

  // const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  const restaurants = useFetchRestaurants(); // 수정
  const categories = extractCategories(restaurants);

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={restaurants}
      />
    </div>
  );
}

export default FilterableRestaurantTable;
