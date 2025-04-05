import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

jest.mock('../Logo', () => {
  const Logo = () => <div>Logo</div>;
  Logo.displayName = 'Logo';
  return Logo;
});

jest.mock('./DesktopMenu', () => {
  const DesktopMenu = () => <div>DesktopMenu</div>;
  DesktopMenu.displayName = 'DesktopMenu';
  return DesktopMenu;
});

jest.mock('./SearchBar', () => {
  const SearchBar = () => <div>SearchBar</div>;
  SearchBar.displayName = 'SearchBar';
  return SearchBar;
});

jest.mock('./CartButton', () => {
  const CartButton = () => <div>CartButton</div>;
  CartButton.displayName = 'CartButton';
  return CartButton;
});

jest.mock('./MobileMenu', () => {
  const MobileMenu = ({
    isOpen,
    close,
  }: {
    isOpen: boolean;
    close: () => void;
  }) => (
    <div data-testid="mobile-menu" className={isOpen ? 'open' : 'closed'}>
      MobileMenu
      <button onClick={close}>Close Menu</button>
    </div>
  );
  MobileMenu.displayName = 'MobileMenu';
  return MobileMenu;
});

describe('Navbar', () => {
  afterEach(cleanup);

  it('renders Logo, DesktopMenu, SearchBar, and CartButton', () => {
    render(<Navbar />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('DesktopMenu')).toBeInTheDocument();
    expect(screen.getByText('SearchBar')).toBeInTheDocument();
    expect(screen.getByText('CartButton')).toBeInTheDocument();
  });

  it('opens and closes the mobile menu when the menu button is clicked', () => {
    render(<Navbar />);

    const menuButton = screen.getByText('menu');
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toHaveClass('closed');

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('open');

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('closed');
  });

  it('closes the mobile menu when clicking outside', () => {
    render(<Navbar />);

    const menuButton = screen.getByText('menu');
    const mobileMenu = screen.getByTestId('mobile-menu');

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('open');

    fireEvent.mouseDown(document);
    expect(mobileMenu).toHaveClass('closed');
  });

  it('closes the mobile menu when the close button inside the menu is clicked', () => {
    render(<Navbar />);

    const menuButton = screen.getByText('menu');
    const mobileMenu = screen.getByTestId('mobile-menu');

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('open');

    fireEvent.click(screen.getByText('Close Menu'));
    expect(mobileMenu).toHaveClass('closed');
  });
});
