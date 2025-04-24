'use client';

import { observer } from 'mobx-react-lite';
import { cartStore } from '../../stores/cart-store';
import Image from 'next/image';

const CheckoutSummaryItemList: React.FC = observer(() => {
  const cartItems = cartStore.getCartItems();

  return (
    <div className="space-y-4">
      {cartItems.map((item, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src={item.shoe.colorImages[item.selectedColor][0]}
              alt={item.shoe.name}
              fill
              sizes="64px"
              quality={100}
              className="rounded object-cover"
            />
            <div className="absolute -top-2 -right-2 bg-white text-black text-xs font-semibold px-1.5 py-0.5 rounded-full">
              {item.quantity}
            </div>
          </div>
          <div className="flex-1">
            <p className="font-medium">{item.shoe.name}</p>
            <p className="text-sm text-gray-400">
              {item.selectedColor} / {item.selectedSize}
            </p>
          </div>
          <div className="min-w-max text-sm font-semibold">
            ${(item.selectedPrice * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
});

export default CheckoutSummaryItemList;
