'use client';

import { cartStore } from '../../stores/cart-store';
import CartItem from './CartItem';

const CartList: React.FC = () => {
  const items = cartStore.getCartItems();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        items.map((item, index) => (
          <CartItem key={`${item.shoe.name}-${index}`} item={item} />
        ))
      )}
    </div>
  );
};

export default CartList;
