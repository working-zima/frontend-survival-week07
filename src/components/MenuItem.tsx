import Food from '../types/Food';

type MenuItem = {
  food: Food;
}

function MenuItem({ food }: MenuItem) {
  const { name, price } = food;

  return (
    <div>
      <button type="button">
        <span>
          {name}
          {' '}
          {price.toLocaleString()}
          원
        </span>
      </button>
    </div>
  );
}

export default MenuItem;
