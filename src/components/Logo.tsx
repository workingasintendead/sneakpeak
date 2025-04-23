import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => (
  <div className="max-w-[150px] sm:max-w-none">
    <div className="flex-shrink-0">
      <Link href="/">
        <Image
          src="/SneakPeakLogo.png"
          alt="SneakPeak Nav Logo"
          width={100}
          height={100}
          className="object-contain transition-all duration-300 hover:opacity-70"
        />
      </Link>
    </div>
  </div>
);

export default Logo;
