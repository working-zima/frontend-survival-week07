import { useNavigate } from 'react-router';

import useCartStore from '../../hooks/useCartStore';
import CartItem from './CartItem';
import Summary from './Summary';
import useFetchCreateOrder from '../../hooks/useFetchCreateOrder';
import OperationButtons from './OperationButtons';

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
      <OperationButtons
        handleClickCancel={handleClickCancel}
        handelClickOrder={handelClickOrder}
      />
    </div>
  );
}

export default Cart;
