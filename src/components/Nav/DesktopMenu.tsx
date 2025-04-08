import { observer } from 'mobx-react-lite';
import { edgeConfigStore } from '../../stores/edge-config-store';
import DesktopCategory from './DesktopCategory';
import { Category } from '../../types/categories';

const DesktopMenu: React.FC = observer(() => {
  const { configData } = edgeConfigStore;

  const constantCategories = Object.values(Category);

  return (
    <div className="hidden md:flex flex-1 justify-center space-x-8 text-white">
      <nav className="flex gap-0">
        {constantCategories.map((categoryKey) => (
          <DesktopCategory
            key={categoryKey}
            categoryKey={categoryKey}
            category={configData?.categories[categoryKey.toLowerCase()]}
          />
        ))}
      </nav>
    </div>
  );
});

export default DesktopMenu;
