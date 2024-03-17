import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
}

function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <FilterTextField />
      <Categories categories={categories} />
    </div>
  );
}

export default SearchBar;
