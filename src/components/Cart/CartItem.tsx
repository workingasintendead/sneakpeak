'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '../../types';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { shoe, selectedColor, selectedSize, selectedPrice } = item;

  return (
    <div className="flex gap-4 border-b pb-4">
      <Image
        width={96}
        height={96}
        src={shoe.colorImages[selectedColor]}
        alt={shoe.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{shoe.name}</h2>
          <p className="text-sm text-gray-600">{shoe.brand}</p>
          <p className="text-sm mt-1">
            Size: {selectedSize} · Color: {selectedColor}
          </p>
        </div>
        <p className="text-base font-medium">${selectedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
