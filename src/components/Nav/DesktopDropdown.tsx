import Link from 'next/link';
import { Category } from '../../types';

interface DesktopDropdownProps {
  categoryKey: string;
  category: Category;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  categoryKey,
  category,
}) => {
  return (
    <div className="absolute left-0 top-full z-50 bg-gray-800 text-white p-4 shadow-lg min-w-[200px]">
      {category.shoebrands.length > 0 && (
        <div className="px-4 py-1 mt-1">
          <h3 className="font-semibold">Brands</h3>
          {category.shoebrands.map((brand) => (
            <Link
              key={brand}
              href={`/${categoryKey.toLowerCase()}/brands/${brand.toLowerCase()}`}
              className="block px-4 py-1 hover:bg-gray-700"
            >
              {brand}
            </Link>
          ))}
        </div>
      )}

      {category.shoestyles.length > 0 && (
        <div className="px-4 py-1">
          <h3 className="font-semibold">Styles</h3>
          {category.shoestyles.map((style) => (
            <Link
              key={style}
              href={`/${categoryKey.toLowerCase()}/styles/${style.toLowerCase()}`}
              className="block px-4 py-1 hover:bg-gray-700"
            >
              {style}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopDropdown;
