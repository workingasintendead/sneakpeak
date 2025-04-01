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
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <DesktopMenu />
        </div>
        <div className="flex items-center space-x-4 text-white">
          <SearchBar />
          <CartButton />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <i className="material-icons">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </i>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} close={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
