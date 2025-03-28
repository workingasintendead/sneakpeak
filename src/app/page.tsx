import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Landing() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-[32px]">
        <Link href="/home">
          <Image
            src="/SneakPeakLogo.png"
            alt="SneakPeak Logo"
            width={800}
            height={800}
            priority
          />
        </Link>
      </main>
    </div>
  );
}

export default Landing;
