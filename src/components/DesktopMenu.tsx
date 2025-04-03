import { observer } from 'mobx-react-lite';
import { edgeConfigStore } from '../stores/edge-config-store';
import Link from 'next/link';

const DesktopMenu: React.FC = observer(() => {
  const { configData } = edgeConfigStore;

  const constantCategories = ['Men', 'Women', 'Kids'];

  return (
    <div className="hidden md:flex flex-1 justify-center space-x-8 text-white">
      <nav className="flex gap-0">
        {constantCategories.map((categoryKey) => {
          const category = configData?.categories[categoryKey.toLowerCase()];

          return (
            <div key={categoryKey} className="relative group">
              <button className="px-4 py-3 text-lg block after-line font-semibold">
                {categoryKey}
              </button>

              {category && (
                <div className="absolute left-0 hidden mt-0 space-y-2 bg-gray-800 text-white group-hover:block group-focus-within:block hover:block transition-all duration-3000 ease-in-out">
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
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
});

export default DesktopMenu;
