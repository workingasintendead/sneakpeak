'use client';

import { cartStore } from '../../stores/cart-store';
import { observer } from 'mobx-react-lite';

const CartButton: React.FC = observer(() => {
  return (
    <button
      aria-label="Open shopping cart"
      onClick={() => cartStore.openDrawer()}
      className="relative h-10 w-10 flex items-center justify-center cursor-pointer"
    >
      <i className="material-icons text-white !text-[40px] leading-none">
        shopping_bag
      </i>

      {cartStore.totalItems > 0 && (
        <span className="absolute top-4 text-sm font-semibold text-gray-900 pointer-events-none">
          {cartStore.totalItems}
        </span>
      )}
    </button>
  );
});

export default CartButton;
