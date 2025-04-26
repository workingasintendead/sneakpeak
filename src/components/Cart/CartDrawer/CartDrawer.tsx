'use client';

import { observer } from 'mobx-react-lite';
import { cartStore } from '../../../stores/cart-store';
import EmptyCartContent from './CartDrawerEmpty';
import CartDrawerList from './CartDrawerList';

const CartDrawer: React.FC = observer(() => {
  const isOpen = cartStore.drawerOpen;
  const closeDrawer = () => cartStore.closeDrawer();
  const items = cartStore.getCartItems();
  const subtotal = cartStore.cartTotal;

  return (
    <>
      <div
        role="presentation"
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        role="dialog"
        aria-label="Shopping cart"
        inert={!isOpen}
        className={`fixed top-0 right-0 h-full w-full max-w-[35rem] bg-gray-800 z-50 shadow-lg transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 h-full flex flex-col text-white">
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
              <CartDrawerList
                cartItems={items}
                subtotal={subtotal}
                onClose={closeDrawer}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default CartDrawer;
