'use client';

import { cartStore } from '../../stores/cart-store';

interface AddToCartButtonProps {
  onAddToCart: () => void;
  disabled: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onAddToCart,
  disabled,
}) => {
  const handleClick = () => {
    onAddToCart();
    cartStore.openDrawer();
  };

  return (
    <div className="mt-2">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full disabled:opacity-50 cursor-pointer"
        onClick={handleClick}
        disabled={disabled}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
