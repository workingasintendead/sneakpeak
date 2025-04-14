'use client';

import { cartStore } from '../../stores/cart-store';
import CartItem from './CartItem';
import { observer } from 'mobx-react-lite';

const CartList: React.FC = observer(() => {
  const items = cartStore.getCartItems();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Bag</h1>
      {items.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={`${item.shoe.name}-${item.selectedColor}-${item.selectedSize}`}
            item={item}
          />
        ))
      )}
    </div>
  );
});

export default CartList;
