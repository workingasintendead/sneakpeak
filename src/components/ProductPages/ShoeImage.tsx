import Image from 'next/image';

interface ShoeImageProps {
  activeImage: string;
  name: string;
  activeColor: string;
}

const ShoeImage: React.FC<ShoeImageProps> = ({
  activeImage,
  name,
  activeColor,
}) => {
  return (
    <Image
      src={activeImage}
      alt={`${name} - ${activeColor}`}
      className="w-full h-48 object-cover"
      width={200}
      height={200}
    />
  );
};

export default ShoeImage;
