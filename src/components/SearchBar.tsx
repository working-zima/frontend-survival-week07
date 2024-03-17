import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
}

function SearchBar({ filterText, setFilterText, setFilterCategory }) {
  return (
    <div>
      <FilterTextField />
      <Categories />
    </div>
  );
}

export default SearchBar;
