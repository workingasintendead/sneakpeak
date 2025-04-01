import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from 'lib/utils/components/ui/navigation-menu';
import { cn } from 'lib/utils/lib/utils';

interface NavCatProps {
  title: string;
  brands: string[];
  styles: string[];
  category: string;
}

const NavCat: React.FC<NavCatProps> = ({ title, brands, styles, category }) => (
  <div>
    <NavigationMenuTrigger className={cn('your-style')}>
      {title}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid gap-1 p-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <div>
          <h3 className="font-semibold mb-2">Brands</h3>
          {brands.map((brand) => (
            <NavigationMenuLink
              key={brand}
              href={`/${category}/brands/${brand.toLowerCase()}`}
              className="block px-4 py-1 hover:bg-gray-200"
            >
              {brand}
            </NavigationMenuLink>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Styles</h3>
          {styles.map((style) => (
            <NavigationMenuLink
              key={style}
              href={`/${category}/styles/${style.toLowerCase()}`}
              className="block px-4 py-1 hover:bg-gray-200"
            >
              {style}
            </NavigationMenuLink>
          ))}
        </div>
      </ul>
    </NavigationMenuContent>
  </div>
);

export default NavCat;
