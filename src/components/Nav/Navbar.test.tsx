import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

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
