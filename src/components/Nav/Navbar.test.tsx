import { render, screen, fireEvent } from '@testing-library/react';
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
      {isOpen && <button onClick={close}>Close Menu</button>}
    </div>
  );
  MobileMenu.displayName = 'MobileMenu';
  return MobileMenu;
});

describe('Navbar', () => {
  it('opens and closes the mobile menu when the menu button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByText('menu');
    expect(screen.queryByText('Close Menu')).not.toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.queryByText('Close Menu')).not.toBeInTheDocument();
  });

  it('closes the mobile menu when clicking outside', () => {
    render(<Navbar />);

    const menuButton = screen.getByText('menu');

    fireEvent.click(menuButton);
    expect(screen.getByText('Close Menu')).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(screen.queryByText('Close Menu')).not.toBeInTheDocument();
  });

  it('closes the mobile menu when the close button inside the menu is clicked', () => {
    render(<Navbar />);

    const menuButton = screen.getByText('menu');

    fireEvent.click(menuButton);
    expect(screen.getByText('Close Menu')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Close Menu'));
    expect(screen.queryByText('Close Menu')).not.toBeInTheDocument();
  });
});
