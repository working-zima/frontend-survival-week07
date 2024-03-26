import React from 'react';
import useFetchOrder from '../../hooks/useFetchOrder';
import Message from './Message';
import Menu from './Menu';

type OrderProps = {
  orderId: string
  handleClickBack: () => void;
}

function Order({ orderId, handleClickBack }
   : OrderProps) {
  const order = useFetchOrder(orderId);

  return (
    <div>
      <Message order={order} />
      {Object.keys(order).length ? (
        <Menu order={order} />
      ) : null}
      <button type="button" onClick={handleClickBack}>
        메인화면으로 돌아가기
      </button>
    </div>
  );
}

export default Order;
