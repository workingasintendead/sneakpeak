'use client';

import { cartStore } from '../../stores/cart-store';
import Shipping from './Shipping';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

const CartSummary: React.FC = observer(() => {
  const subtotal = cartStore.cartTotal;
  const shippingCost = subtotal > 0 && subtotal < 150 ? 20 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span aria-label="subtotal-amount">${subtotal.toFixed(2)}</span>
      </div>
      <Shipping />
      <div className="flex justify-between text-sm font-semibold border-t pt-2 mt-2">
        <span>Total</span>
        <span aria-label="total-amount">${total.toFixed(2)}</span>
      </div>
      <Link
        href="https://www.youtube.com/watch?v=jxo_K7JLZxQ"
        target="_blank"
        className="block w-full mt-6 bg-black text-white py-3 rounded text-center hover:bg-gray-900 transition"
      >
        Checkout
      </Link>
    </div>
  );
});

export default CartSummary;
