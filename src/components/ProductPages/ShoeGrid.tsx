'use client';

import ShoeCard from './ShoeCard';
import { Shoe } from '../../types/index';

interface ShoeGridProps {
  shoes: Shoe[];
}

const ShoeGrid: React.FC<ShoeGridProps> = ({ shoes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
      {shoes.map((shoe) => (
        <div key={shoe.name} className="flex flex-col h-full">
          <ShoeCard
            name={shoe.name}
            brand={shoe.brand}
            sizes={shoe.sizes}
            colors={shoe.colors}
            colorImages={shoe.colorImages}
            description={shoe.description}
            prices={shoe.prices}
          />
        </div>
      ))}
    </div>
  );
};

export default ShoeGrid;
