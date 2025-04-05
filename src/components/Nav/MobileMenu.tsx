'use client';

import { observer } from 'mobx-react-lite';
import { edgeConfigStore } from '../../stores/edge-config-store';
import Link from 'next/link';
import MobileCategory from './MobileCategory';
import LoadingSpinner from '../LoadingSpinner';

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, close }) => {
  const { configData } = edgeConfigStore;

  const categories = configData?.categories ?? {};
  const uniqueBrands = edgeConfigStore.uniqueBrands ?? [];

  return configData ? (
    <div
      role="dialog"
      className={`md:hidden bg-gray-800 text-white w-80 fixed top-0 right-0 h-screen z-50 transform transition-transform duration-1000 ease-in-out ${
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
          {['men', 'women', 'kids']
            .filter((categoryKey) => categories[categoryKey])
            .map((categoryKey) => (
              <MobileCategory
                key={categoryKey}
                title={categories[categoryKey].title}
                styles={categories[categoryKey].styles}
                categoryKey={categoryKey}
              />
            ))}

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
  ) : (
    <LoadingSpinner />
  );
};

export default observer(MobileMenu);
