'use client';

import { observer } from 'mobx-react-lite';
import { cartStore } from '../../stores/cart-store';

const CheckoutSummaryPrice: React.FC = observer(() => {
  const subtotal = cartStore.cartTotal;
  const shippingCost = subtotal > 0 && subtotal < 150 ? 20 : 0;
  const taxes = 0;
  const total = subtotal + shippingCost + taxes;
  const savings = shippingCost > 0 ? 0 : 20.0;

  return (
    <div className="space-y-3 text-sm border-t pt-3">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>
          {shippingCost === 0 ? (
            <span className="line-through text-gray-500 mr-1">$20.00</span>
          ) : null}
          {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Estimated taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-base border-t pt-3 mb-1">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {savings > 0 && (
        <div className="text-sm text-green-400 font-medium pt-0">
          <i className="material-icons rotate-y-180 align-middle">sell</i> TOTAL
          SAVINGS ${savings.toFixed(2)}
        </div>
      )}
    </div>
  );
});

export default CheckoutSummaryPrice;
