import Link from 'next/link';
import DesktopDropdown from './DesktopDropdown';
import { Category } from '../../types/index';

interface DesktopCategoryProps {
  categoryKey: string;
  category: Category | undefined;
  isOpen: boolean;
  onHover: (key: string | null) => void;
}

const DesktopCategory: React.FC<DesktopCategoryProps> = ({
  categoryKey,
  category,
  isOpen,
  onHover,
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => onHover(categoryKey)}
      onMouseLeave={() => onHover(null)}
    >
      <Link
        href={`/${categoryKey.toLowerCase()}`}
        className="px-4 py-3 text-lg font-semibold cursor-pointer after-line block"
      >
        {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
      </Link>

      {category && isOpen && (
        <div className="absolute left-0 top-full z-50">
          <DesktopDropdown categoryKey={categoryKey} category={category} />
        </div>
      )}
    </div>
  );
};

export default DesktopCategory;
