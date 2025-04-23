import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ShoeImageProps {
  images: string[];
  name: string;
  activeColor: string;
}

const ShoeImage: React.FC<ShoeImageProps> = ({ images, name, activeColor }) => {
  const [image, setImage] = useState('');
  const indexRef = useRef(0);
  useEffect(() => {
    indexRef.current = 0;
    setImage(images[indexRef.current]);
  }, [images]);

  const nextImage = () => {
    indexRef.current = (indexRef.current + 1) % images.length;
    setImage(images[indexRef.current]);
  };

  const prevImage = () => {
    indexRef.current = (indexRef.current - 1 + images.length) % images.length;
    setImage(images[indexRef.current]);
  };

  return (
    <div className="relative w-full h-60 group">
      {image.length > 0 && (
        <Image
          src={image}
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
