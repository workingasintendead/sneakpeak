'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '../../types';
import QuantitySelector from './QuantitySelector';
import { cartStore } from '../../stores/cart-store';
import { observer } from 'mobx-react-lite';

interface Props {
  cartItem: CartItemType;
  compact?: boolean;
}

const CartItem: React.FC<Props> = observer(({ cartItem, compact = false }) => {
  const { shoe, selectedColor, selectedSize, selectedPrice, quantity } =
    cartItem;

  const selectedColorImages = shoe.colorImages[selectedColor];
  const imageUrl = selectedColorImages[0];

  return (
    <div className={`flex gap-4 border-b pb-4 last:border-b-0 last:pb-0`}>
      <div className="w-40 relative">
        <Image
          src={imageUrl}
          alt={shoe.name}
          fill
          sizes="160px"
          quality={100}
          className="object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">{shoe.name}</h2>
            <p className="text-sm text-gray-400">{shoe.brand}</p>
            {compact ? (
              <div className="text-sm mt-1 flex flex-col text-white">
                <span>Size: {selectedSize}</span>
                <span>Color: {selectedColor}</span>
              </div>
            ) : (
              <p className="text-sm mt-1 text-white">
                Size: {selectedSize} · Color: {selectedColor}
              </p>
            )}
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
