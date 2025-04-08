'use client';

import { useState, useEffect } from 'react';
import ShoeImage from './ShoeImage';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import PriceSection from './PriceSection';
import AddToCartButton from './AddToCartButton';

interface ShoeCardProps {
  name: string;
  brand: string;
  sizes: string[];
  colors: string[];
  colorImages: { [color: string]: string };
  description: string;
  prices: { [color: string]: number };
  onAddToCart: (
    name: string,
    size: string,
    color: string,
    price: number
  ) => void;
}

const ShoeCard: React.FC<ShoeCardProps> = ({
  name,
  brand,
  sizes,
  colors,
  colorImages,
  description,
  prices,
  onAddToCart,
}) => {
  const [activeColor, setActiveColor] = useState<string>(colors[0]);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(colorImages[colors[0]]);
  const [activePrice, setActivePrice] = useState<number>(prices[colors[0]]);

  useEffect(() => {
    setActiveImage(colorImages[activeColor]);
    setActivePrice(prices[activeColor]);
  }, [activeColor, colorImages, prices]);

  const handleColorChange = (color: string) => {
    setActiveColor(color);
  };

  const handleSizeChange = (size: string) => {
    setActiveSize(size);
  };

  const handleAddToCart = () => {
    if (activeColor && activeSize) {
      onAddToCart(name, activeSize, activeColor, activePrice);
    } else {
      alert('Please select a size and color before adding to the cart!');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <ShoeImage
        activeImage={activeImage}
        name={name}
        activeColor={activeColor}
      />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-black text-xl font-semibold">{name}</h3>
            <p className="text-gray-500">{brand}</p>
            <p
              className="my-2 text-sm text-gray-700"
              style={{
                minHeight: '3.6em',
                lineHeight: '1.8em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box',
              }}
            >
              {description}
            </p>
          </div>
          <ColorSelector
            colors={colors}
            activeColor={activeColor}
            onColorChange={handleColorChange}
          />
          <SizeSelector
            sizes={sizes}
            activeSize={activeSize}
            onSizeChange={handleSizeChange}
          />
          <PriceSection activePrice={activePrice} />
          <AddToCartButton
            onAddToCart={handleAddToCart}
            disabled={!activeSize || !activeColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
