'use client';

import { observer } from 'mobx-react-lite';
import { cartStore } from '../../../stores/cart-store';
import CartDrawerContainer from './CartDrawerContainer';
import EmptyCartContent from './CartDrawerEmpty';
import CartItemList from './CartDrawerList';

const CartDrawer: React.FC = observer(() => {
  const isOpen = cartStore.drawerOpen;
  const closeDrawer = () => cartStore.closeDrawer();
  const items = cartStore.getCartItems();
  const subtotal = cartStore.cartTotal;

  return (
    <CartDrawerContainer isOpen={isOpen} onClose={closeDrawer}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Bag</h2>
        <button aria-label="close" onClick={closeDrawer}>
          <i className="material-icons cursor-pointer">close</i>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
        {items.length === 0 ? (
          <EmptyCartContent onClose={closeDrawer} />
        ) : (
          <CartItemList
            cartItems={items}
            subtotal={subtotal}
            onClose={closeDrawer}
          />
        )}
      </div>
    </CartDrawerContainer>
  );
});

export default CartDrawer;
