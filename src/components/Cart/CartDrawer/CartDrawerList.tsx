import Link from 'next/link';
import CartItem from '../CartItem';
import { CartItem as CartItemType } from '../../../types';

interface CartItemListProps {
  cartItems: CartItemType[];
  subtotal: number;
  onClose: () => void;
}

const CartDrawerList: React.FC<CartItemListProps> = ({
  cartItems,
  subtotal,
  onClose,
}) => (
  <>
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartItem
          key={`${item.shoe.name}-${item.selectedColor}-${item.selectedSize}`}
          cartItem={item}
          compact
        />
      ))}
    </div>
    <div className="mt-4 border-t pt-4 space-y-1 text-sm">
      <div className="flex justify-between">
        <i>Shipping & taxes calculated at checkout</i>
      </div>
      <Link
        href="/checkout"
        className="block w-full mt-4 bg-black text-white text-center text-lg font-medium py-3 rounded hover:bg-gray-900 transition"
        aria-label="checkout button"
        onClick={onClose}
      >
        CHECKOUT <span className="px-3">●</span> ${subtotal.toFixed(2)}
      </Link>
    </div>
  </>
);

export default CartDrawerList;
