interface NavigationCategoryProps {
  title: string;
  brands: string[];
  styles: string[];
  category: string;
}

const NavigationCategory: React.FC<NavigationCategoryProps> = ({
  title,
  brands,
  styles,
  category,
}) => (
  <div className="relative">
    <div className="cursor-pointer">{title}</div>
    <div className="absolute bg-white text-black p-4 shadow-lg w-64 mt-2 hidden group-hover:block">
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <ul>
          {brands.map((brand) => (
            <li key={brand}>
              <a
                href={`/${category}/brands/${brand.toLowerCase()}`}
                className="block px-4 py-1 hover:bg-gray-200"
              >
                {brand}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Styles</h3>
        <ul>
          {styles.map((style) => (
            <li key={style}>
              <a
                href={`/${category}/styles/${style.toLowerCase()}`}
                className="block px-4 py-1 hover:bg-gray-200"
              >
                {style}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default NavigationCategory;
