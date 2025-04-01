'use client';

import { useState } from 'react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-gray-900 p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <DesktopMenu />
        </div>
        <div className="space-x-4 md:flex md:items-center md:ml-auto md:w-auto w-full flex justify-center items-center">
          <SearchBar />
          <CartButton />
        </div>
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMobileMenu} className="text-white">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} close={closeMobileMenu} />
      )}
    </nav>
  );
};

export default Navbar;
