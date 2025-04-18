import { render, screen, fireEvent } from '@testing-library/react';
import CartDrawerEmpty from './CartDrawerEmpty';

describe('CartDrawerEmpty', () => {
  const mockOnClose = jest.fn();

  it('renders the empty cart message', () => {
    render(<CartDrawerEmpty onClose={mockOnClose} />);

    expect(screen.getByText(/your bag is empty/i)).toBeInTheDocument();
  });

  it('renders a button for each audience category', () => {
    render(<CartDrawerEmpty onClose={mockOnClose} />);

    expect(screen.getByText(`Shop Men`)).toBeInTheDocument();
    expect(screen.getByText(`Shop Women`)).toBeInTheDocument();
    expect(screen.getByText(`Shop Kids`)).toBeInTheDocument();
  });

  it('calls onClose when a link is clicked', () => {
    render(<CartDrawerEmpty onClose={mockOnClose} />);

    expect(mockOnClose).toHaveBeenCalledTimes(0);
    const link = screen.getByText(`Shop Men`);
    fireEvent.click(link);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
