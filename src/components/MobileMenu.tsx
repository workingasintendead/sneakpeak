'use client';

import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { edgeConfigStore } from '../stores/edge-config-store';

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, close }) => {
  const { configData } = edgeConfigStore;

  if (!configData) {
    return <div>Loading...</div>;
  }

  const categories = configData.categories;

  const uniqueBrands = new Set<string>();
  Object.keys(categories).forEach((categoryKey) => {
    const category = categories[categoryKey];
    category.brands.forEach((brand) => {
      uniqueBrands.add(brand);
    });
  });

  return (
    <div
      className={`md:hidden bg-gray-800 text-white w-80 fixed top-0 right-0 h-screen z-50 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full overflow-y-auto ps-4 bg-gray-800 custom-scrollbar">
        <button
          onClick={close}
          className="text-white text-2xl fixed top-7.5 right-4 z-50"
        >
          <i className="material-icons">close</i>
        </button>

        <div className="mt-12">
          {['men', 'women', 'kids'].map((categoryKey) => {
            const category = categories[categoryKey];

            if (!category) return null;

            return (
              <div key={categoryKey}>
                <Link href={`/${categoryKey}`} className="block py-2">
                  {category.title}
                </Link>
                {category.styles.map((style) => (
                  <Link
                    key={style}
                    href={`/${categoryKey}/styles/${style.toLowerCase()}`}
                    className="block py-2 pl-6"
                  >
                    {style}
                  </Link>
                ))}
              </div>
            );
          })}

          <div>
            <Link href="/brands" className="block py-2">
              Brands
            </Link>
            {[...uniqueBrands].map((brand) => (
              <Link
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="block py-2 pl-6"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MobileMenu);
