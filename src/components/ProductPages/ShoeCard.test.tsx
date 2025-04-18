import { render, screen, fireEvent } from '@testing-library/react';
import ShoeCard from './ShoeCard';
import { mockData } from '../../data/MockData';

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    updateQuantity: jest.fn(),
    openDrawer: jest.fn(),
  },
}));

const mockShoe = mockData.men[0];

describe('ShoeCard', () => {
  it('renders the shoe card with the initial color and price', () => {
    render(<ShoeCard {...mockShoe} />);

    expect(screen.getByText('Price: $150')).toBeInTheDocument();
    expect(screen.getByAltText('Air Max 97 - Red')).toBeInTheDocument();
  });

  it('changes the image and price when a different color is selected', () => {
    render(<ShoeCard {...mockShoe} />);
    const blackButton = screen.getByRole('button', { name: 'Black' });

    expect(screen.getByText('Price: $150')).toBeInTheDocument();
    expect(screen.getByAltText('Air Max 97 - Red')).toBeInTheDocument();

    fireEvent.click(blackButton);

    expect(screen.getByText('Price: $140')).toBeInTheDocument();
    expect(screen.getByAltText('Air Max 97 - Black')).toBeInTheDocument();
    expect(screen.queryByText('Price: $150')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Air Max 97 - Red')).not.toBeInTheDocument();
  });

  it('enables the Add to Cart button when both color and size are selected', () => {
    render(<ShoeCard {...mockShoe} />);

    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    const sizeButton = screen.getByRole('button', { name: '7' });

    expect(addButton).toBeDisabled();
    fireEvent.click(sizeButton);
    expect(addButton).toBeEnabled();
  });

  it('calls onAddToCart when the Add to Cart button is clicked with valid inputs', () => {
    const mockAddToCart = jest.fn();
    render(<ShoeCard {...mockShoe} onAddToCart={mockAddToCart} />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: 'White' }));

    fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(mockAddToCart).toHaveBeenCalledWith('Air Max 97', '9', 'White', 130);
  });
});
