import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: Food[]
}

function Menu({ menu }: MenuProps) {
  return (
    <div style={{ paddingBlock: '1rem' }}>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (<MenuItem key={key} food={food} />);
      })}
    </div>
  );
}

export default Menu;
