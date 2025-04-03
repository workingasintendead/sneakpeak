import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center gap-[32px]">
          <Link href="/mens">
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
    </>
  );
}

export default Home;
