'use client';

import { cartStore } from '../../stores/cart-store';

const Shipping: React.FC = () => {
  const subtotal = cartStore.cartTotal;

  let shippingCost = 0;

  if (subtotal > 0 && subtotal < 150) {
    shippingCost = 20;
  }

  return (
    <div className="flex justify-between text-sm mb-2">
      <span>Shipping</span>
      <span aria-label="shipping-amount">
        {shippingCost === 0
          ? subtotal === 0
            ? '$0.00'
            : 'Free'
          : `$${shippingCost.toFixed(2)}`}
      </span>
    </div>
  );
};

export default Shipping;
