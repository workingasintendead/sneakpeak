'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { orderStore } from '../../stores/order-store';
import OrderSummary from '../../components/Checkout/Order/OrderSummary';
import OrderDetails from '../../components/Checkout/Order/OrderDetails';

const OrderConfirmationPage = observer(() => {
  const router = useRouter();
  const order = orderStore.order;

  useEffect(() => {
    if (!order) {
      router.push('/');
    }
  }, [router, order]);

  return order ? (
    <div className="w-full max-w-[576px] mx-auto px-4 py-8 space-y-10">
      <div className="text-center mb-3">
        <h1 className="text-3xl font-semibold">Thank you for your order!</h1>
        <p className="text-lg">
          Your new kicks are on the way. We’ll have you laced up in no time!
        </p>
      </div>

      <div className="w-full mx-auto border rounded-lg p-4 lg:px-6 shadow-md space-y-8">
        <OrderSummary
          customer={order.customer}
          estimatedTimeOfArrival={order.estimatedTimeOfArrival}
          paymentType={order.payment.type}
          dateOfPurchase={order.dateOfPurchase}
        />
        <OrderDetails
          items={order.items}
          subTotal={order.subTotal}
          grandTotal={order.grandTotal}
          shipping={order.shipping}
          taxes={order.taxes}
        />
      </div>
    </div>
  ) : null;
});

export default OrderConfirmationPage;
