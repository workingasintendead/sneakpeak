import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';
import { mockCartItem } from './__mocks__/mockCartItem';
import { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import { cartStore } from '../../stores/cart-store';

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    updateQuantity: jest.fn(),
  },
}));

describe('CartItem', () => {
  beforeEach(() => {
    render(<CartItem cartItem={mockCartItem} />);
  });

  describe('renders text content', () => {
    it('shows the correct shoe name', () => {
      expect(screen.getByText("UltraBoost 21 Women's")).toBeInTheDocument();
    });

    it('shows the brand', () => {
      expect(screen.getByText('Adidas')).toBeInTheDocument();
    });

    it('shows the size and color', () => {
      expect(screen.getByText('Size: 9 · Color: Pink')).toBeInTheDocument();
    });

    it('shows the selected price', () => {
      expect(screen.getByText('$360.00')).toBeInTheDocument();
    });

    it('shows the quantity', () => {
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });
  describe('calls updateQuantity on button click', () => {
    it('calls updateQuantity with "increase" when + is clicked', () => {
      const increaseButton = screen.getByText('+');
      fireEvent.click(increaseButton);

      expect(cartStore.updateQuantity).toHaveBeenCalledWith(
        mockCartItem.shoe,
        mockCartItem.selectedColor,
        mockCartItem.selectedSize,
        'increase'
      );
    });

    it('calls updateQuantity with "decrease" when - is clicked', () => {
      const decreaseButton = screen.getByText('-');
      fireEvent.click(decreaseButton);

      expect(cartStore.updateQuantity).toHaveBeenCalledWith(
        mockCartItem.shoe,
        mockCartItem.selectedColor,
        mockCartItem.selectedSize,
        'decrease'
      );
    });
  });

  describe('renders image correctly', () => {
    it('displays the shoe image with correct src and alt text', () => {
      const img = screen.getByAltText(
        "UltraBoost 21 Women's"
      ) as HTMLImageElement;

      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain('ultraboost-pink.jpg');
    });
  });
});

describe('QuantitySelector', () => {
  const TestQuantitySelector = () => {
    const [quantity, setQuantity] = useState(mockCartItem.quantity);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity - 1);

    return (
      <QuantitySelector
        quantity={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    );
  };

  it('renders the initial quantity', () => {
    render(<TestQuantitySelector />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('increments quantity when + is clicked', () => {
    render(<TestQuantitySelector />);
    const increaseButton = screen.getByText('+');

    fireEvent.click(increaseButton);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('decrements quantity when - is clicked', () => {
    render(<TestQuantitySelector />);
    const decreaseButton = screen.getByText('-');

    fireEvent.click(decreaseButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
