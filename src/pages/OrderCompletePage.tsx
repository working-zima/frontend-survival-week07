import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

import Order from '../components/order/Order';

export default function OrderCompletePage() {
  const navigate = useNavigate();

  const [readSearchParams] = useSearchParams();
  const orderId = readSearchParams.get('orderId');

  if (!orderId) {
    navigate('/');
    return null;
  }

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <Order
      orderId={orderId}
      handleClickBack={handleClickBack}
    />
  );
}
