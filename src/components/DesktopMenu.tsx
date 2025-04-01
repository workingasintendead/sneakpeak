import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from 'lib/utils/components/ui/navigation-menu';
import NavCat from './NavCat';

const categories = {
  men: {
    title: 'Men',
    brands: ['Nike', 'Adidas', 'Reebok'],
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
  women: {
    title: 'Women',
    brands: ['Nike', 'Adidas', 'Reebok'],
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
  kids: {
    title: 'Kids',
    brands: ['Nike', 'Adidas', 'Reebok'],
    styles: ['Basketball', 'Running', 'Crosstraining'],
  },
};

const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden md:flex flex-1 justify-center space-x-8 text-white">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-0 space-x-8">
          {Object.entries(categories).map(([categoryKey, category]) => (
            <NavigationMenuItem className="mr-0" key={categoryKey}>
              <NavCat
                title={category.title}
                brands={category.brands}
                styles={category.styles}
                category={categoryKey}
              />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopMenu;
