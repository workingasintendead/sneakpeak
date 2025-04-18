import Link from 'next/link';
import { AudienceCategory } from '../../../types/enumerations';

interface EmptyCartContentProps {
  onClose: () => void;
}

const constantCategories = Object.values(AudienceCategory);

const CartDrawerEmpty: React.FC<EmptyCartContentProps> = ({ onClose }) => (
  <div className="text-sm text-white flex flex-col items-center justify-center gap-4 py-20">
    <p>Your bag is empty.</p>
    <div className="flex flex-col items-center space-y-3">
      {constantCategories.map((category) => (
        <Link
          key={category}
          href={`/${category}`}
          className="w-35 text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          onClick={onClose}
        >
          Shop {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  </div>
);

export default CartDrawerEmpty;
