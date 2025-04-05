import Link from 'next/link';
import DesktopDropdown from './DesktopDropdown';

export interface Category {
  brands: string[];
  styles: string[];
}

interface DesktopCategoryProps {
  categoryKey: string;
  category: Category | undefined;
}

const DesktopCategory: React.FC<DesktopCategoryProps> = ({
  categoryKey,
  category,
}) => {
  return (
    <div key={categoryKey} className="relative group">
      <Link href={`/${categoryKey.toLowerCase()}`}>
        <button className="px-4 py-3 text-lg block after-line font-semibold cursor-pointer">
          {categoryKey}
        </button>
      </Link>

      {category && (
        <DesktopDropdown categoryKey={categoryKey} category={category} />
      )}
    </div>
  );
};

export default DesktopCategory;
