import Link from 'next/link';

interface MobileCategoryProps {
  title: string;
  shoestyles: string[];
  categoryKey: string;
  close: () => void;
}

const MobileCategory: React.FC<MobileCategoryProps> = ({
  title,
  shoestyles,
  categoryKey,
  close,
}) => (
  <div>
    <Link href={`/${categoryKey}`} className="block py-2" onClick={close}>
      {title}
    </Link>
    {shoestyles.map((style) => (
      <Link
        key={style}
        href={`/${categoryKey}/styles/${style.toLowerCase()}`}
        className="block py-2 pl-6"
        onClick={close}
      >
        {style}
      </Link>
    ))}
  </div>
);

export default MobileCategory;
