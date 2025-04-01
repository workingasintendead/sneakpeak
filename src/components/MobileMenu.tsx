import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const categories = {
  men: {
    title: 'Men',
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
  women: {
    title: 'Women',
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
  kids: {
    title: 'Kids',
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
};

const brands = ['Nike', 'Adidas', 'Reebok'];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, close }) => (
  <div
    className={`md:hidden bg-gray-800 text-white w-full h-full fixed top-0 left-0 z-50 ${isOpen ? 'block' : 'hidden'}`}
    onClick={close}
  >
    <div className="p-4 bg-gray-800" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-end mb-6">
        <button onClick={close} className="text-white text-2xl">
          <i className="material-icons">close</i>
        </button>
      </div>

      {Object.keys(categories).map((categoryKey) => {
        const category = categories[categoryKey as keyof typeof categories];
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
        {brands.map((brand) => (
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
);

export default MobileMenu;
