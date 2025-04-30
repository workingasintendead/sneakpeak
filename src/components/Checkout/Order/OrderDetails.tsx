'use client';

import Image from 'next/image';
import { OrderData } from '../../../types';

interface Props {
  items: OrderData['items'];
  subTotal: number;
  grandTotal: number;
  shipping: number;
  taxes: number;
}

const OrderDetails: React.FC<Props> = ({
  items,
  subTotal,
  grandTotal,
  shipping,
  taxes,
}) => {
  return (
    <div>
      <h2 className="text-base font-semibold mb-3">Order Details</h2>
      <div className="space-y-4 mb-3">
        {items.map((item, index) => (
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
      <div className="space-y-3 text-sm border-t pt-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? (
              <span className="line-through text-gray-500 mr-1">$20.00</span>
            ) : null}
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base border-t pt-3">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
