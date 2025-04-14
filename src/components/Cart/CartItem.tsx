'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '../../types';
import QuantitySelector from './QuantitySelector';
import { cartStore } from '../../stores/cart-store';
import { observer } from 'mobx-react-lite';

interface Props {
  cartItem: CartItemType;
}

const CartItem: React.FC<Props> = observer(({ cartItem }) => {
  const { shoe, selectedColor, selectedSize, selectedPrice, quantity } =
    cartItem;

  return (
    <div className="flex gap-4 border-b pb-4">
      <Image
        width={96}
        height={96}
        src={shoe.colorImages[selectedColor]}
        alt={shoe.name}
        className="w-40 object-cover rounded"
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">{shoe.name}</h2>
            <p className="text-sm text-gray-600">{shoe.brand}</p>
            <p className="text-sm mt-1">
              Size: {selectedSize} · Color: {selectedColor}
            </p>
          </div>
          <p className="text-base font-medium min-w-max pl-4">
            ${(selectedPrice * quantity).toFixed(2)}
          </p>
        </div>
        <QuantitySelector
          quantity={quantity}
          onIncrease={() =>
            cartStore.updateQuantity(
              shoe,
              selectedColor,
              selectedSize,
              'increase'
            )
          }
          onDecrease={() =>
            cartStore.updateQuantity(
              shoe,
              selectedColor,
              selectedSize,
              'decrease'
            )
          }
        />
      </div>
    </div>
  );
});

export default CartItem;
