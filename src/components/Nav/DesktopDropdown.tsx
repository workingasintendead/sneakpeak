import Link from 'next/link';

interface Category {
  brands: string[];
  styles: string[];
}

interface DesktopDropdownProps {
  categoryKey: string;
  category: Category;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  categoryKey,
  category,
}) => {
  return (
    <div className="absolute left-0 hidden mt-0 space-y-2 bg-gray-800 text-white group-hover:block group-focus-within:block hover:block transition-all duration-3000 ease-in-out">
      {category.brands.length > 0 && (
        <div className="px-4 py-1 mt-1">
          <h3 className="font-semibold">Brands</h3>
          {category.brands.map((brand) => (
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

      {category.styles.length > 0 && (
        <div className="px-4 py-1">
          <h3 className="font-semibold">Styles</h3>
          {category.styles.map((style) => (
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
