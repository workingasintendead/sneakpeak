'use client';

import { observer } from 'mobx-react-lite';
import { cartStore } from '../../stores/cart-store';

const CartButton: React.FC = observer(() => (
  <button className="relative h-10 flex items-center justify-center">
    <i className="material-icons text-white !text-[40px] leading-none">
      shopping_bag
    </i>
    {cartStore.totalItems > 0 && (
      <span className="absolute top-4 text-sm font-semibold text-gray-900 pointer-events-none">
        {cartStore.totalItems}
      </span>
    )}
  </button>
));

export default CartButton;
