import { useNavigate } from 'react-router';

import useCartStore from '../../hooks/useCartStore';
import CartItem from './CartItem';
import Summary from './Summary';
import useFetchCreateOrder from '../../hooks/useFetchCreateOrder';

function Cart() {
  const navigate = useNavigate();

  const [{ menu }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clear();
    navigate('/');
  };

  const handelClickOrder = async () => {
    if (!menu.length) {
      return;
    }
    const id = await useFetchCreateOrder(menu);

    store.clear();

    navigate(`/order/complete?orderId=${id}`);
  };

  return (
    <div>
      <Summary selectedMenu={menu} />
      <ul>
        {menu.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              food={food}
              index={index}
              handleClickRemove={handleClickRemove}
            />
          );
        })}
      </ul>
      <div>
        <button type="button" onClick={handleClickCancel}>
          취소
        </button>
        <button type="button" onClick={handelClickOrder}>
          주문하기
        </button>
      </div>
    </div>
  );
}

export default Cart;
