import Link from 'next/link';

interface MobileCategoryProps {
  title: string;
  styles: string[];
  categoryKey: string;
}

const MobileCategory: React.FC<MobileCategoryProps> = ({
  title,
  styles,
  categoryKey,
}) => (
  <div>
    <Link href={`/${categoryKey}`} className="block py-2">
      {title}
    </Link>
    {styles.map((style) => (
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

export default MobileCategory;
