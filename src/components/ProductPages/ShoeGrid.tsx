'use client';

import { useState } from 'react';
import ShoeCard from './ShoeCard';

interface Shoe {
  picture_url: string;
  name: string;
  brand: string;
  sizes: string[];
  colors: string[];
  colorImages: { [color: string]: string };
  description: string;
  prices: { [color: string]: number };
}

interface ShoeGridProps {
  shoes: Shoe[];
}

const ShoeGrid: React.FC<ShoeGridProps> = ({ shoes }) => {
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(
    null
  );

  const handleAddToCart = (
    name: string,
    size: string,
    color: string,
    price: number
  ) => {
    setConfirmationMessage(
      `Added ${name} in size ${size} and color ${color} for $${price} to the cart!`
    );

    setTimeout(() => {
      setConfirmationMessage(null);
    }, 3000);
  };

  return (
    <>
      {confirmationMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-md z-10">
          {confirmationMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
        {shoes.map((shoe) => (
          <div key={shoe.name} className="flex flex-col h-full">
            {' '}
            <ShoeCard
              name={shoe.name}
              brand={shoe.brand}
              sizes={shoe.sizes}
              colors={shoe.colors}
              colorImages={shoe.colorImages}
              description={shoe.description}
              prices={shoe.prices}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoeGrid;
