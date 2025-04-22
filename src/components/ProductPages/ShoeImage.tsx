import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ShoeImageProps {
  images: string[];
  name: string;
  activeColor: string;
}

const ShoeImage: React.FC<ShoeImageProps> = ({ images, name, activeColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-60 group">
      {images.length > 0 && currentIndex < images.length && (
        <Image
          src={images[currentIndex]}
          alt={`${name} - ${activeColor}`}
          width={300}
          height={300}
          className="w-full h-60 object-cover rounded transition-all duration-300 ease-in-out z-0"
        />
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-start pl-4 text-white text-2xl transition group-hover:flex"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-4 text-white text-2xl transition group-hover:flex"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default ShoeImage;
