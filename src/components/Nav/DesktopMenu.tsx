import { observer } from 'mobx-react-lite';
import { edgeConfigStore } from '../../stores/edge-config-store';
import DesktopCategory from './DesktopCategory';
import { AudienceCategory } from '../../types/enumerations';
import { useState } from 'react';

const DesktopMenu: React.FC = observer(() => {
  const { configData } = edgeConfigStore;
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const constantCategories = Object.values(AudienceCategory);

  return (
    <div className="hidden md:flex flex-1 justify-center space-x-8 text-white">
      <nav className="flex gap-0">
        {constantCategories.map((categoryKey) => (
          <DesktopCategory
            key={categoryKey}
            categoryKey={categoryKey}
            category={configData?.categories[categoryKey.toLowerCase()]}
            isOpen={openCategory === categoryKey}
            onHover={setOpenCategory}
          />
        ))}
      </nav>
    </div>
  );
});

export default DesktopMenu;
