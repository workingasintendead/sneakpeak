import { render, screen, fireEvent } from '@testing-library/react';
import ShoeCard from './ShoeCard';

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    updateQuantity: jest.fn(),
  },
}));

const mockShoeProps = {
  name: 'UltraBoost 21',
  brand: 'Adidas',
  sizes: ['7', '8', '9', '10'],
  colors: ['White', 'Blue'],
  colorImages: {
    White: 'white-image-url',
    Blue: 'blue-image-url',
  },
  description:
    'The Adidas UltraBoost 21 offers superior comfort and energy return with every step.',
  prices: {
    White: 100,
    Blue: 110,
  },
};

describe('ShoeCard', () => {
  it('renders the shoe card with the initial color and price', () => {
    render(<ShoeCard {...mockShoeProps} />);

    expect(screen.getByText('Price: $100')).toBeInTheDocument();
    expect(screen.getByAltText('UltraBoost 21 - White')).toBeInTheDocument();
  });

  it('changes the image and price when a different color is selected', () => {
    render(<ShoeCard {...mockShoeProps} />);
    const blueButton = screen.getByRole('button', { name: 'Blue' });

    expect(screen.getByText('Price: $100')).toBeInTheDocument();
    expect(screen.getByAltText('UltraBoost 21 - White')).toBeInTheDocument();

    fireEvent.click(blueButton);

    expect(screen.getByText('Price: $110')).toBeInTheDocument();
    expect(screen.getByAltText('UltraBoost 21 - Blue')).toBeInTheDocument();
  });

  it('enables the Add to Cart button when both color and size are selected', () => {
    render(<ShoeCard {...mockShoeProps} />);

    const addButton = screen.getByRole('button', { name: 'Add to Cart' });
    const sizeButton = screen.getByRole('button', { name: '7' });

    expect(addButton).toBeDisabled();
    fireEvent.click(sizeButton);
    expect(addButton).toBeEnabled();
  });

  it('calls onAddToCart when the Add to Cart button is clicked with valid inputs', () => {
    const mockAddToCart = jest.fn();
    render(<ShoeCard {...mockShoeProps} onAddToCart={mockAddToCart} />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: 'White' }));

    fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(mockAddToCart).toHaveBeenCalledWith(
      'UltraBoost 21',
      '9',
      'White',
      100
    );
  });
});
