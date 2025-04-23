import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ConfigFetch from '../components/ConfigFetch';
import Navbar from '../components/Nav/Navbar';
import CartDrawer from '../components/Cart/CartDrawer/CartDrawer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SneakPeak',
  description: 'SneakPeak: Elevate your footwear',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll overflow-x-hidden min-w-[400px]`}
      >
        <ConfigFetch />
        <Navbar />
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}
