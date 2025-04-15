import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';
import { mockCartItem } from './__mocks__/mockCartItem';
import { cartStore } from '../../stores/cart-store';

let mockQuantity = 2;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    updateQuantity: jest.fn((shoe, color, size, action) => {
      if (action === 'increase') mockQuantity += 1;
      else if (action === 'decrease') mockQuantity -= 1;
    }),
  },
}));

describe('CartItem', () => {
  const renderCartItem = () => {
    const updatedCartItem = {
      ...mockCartItem,
      quantity: mockQuantity,
    };
    render(<CartItem cartItem={updatedCartItem} />);
  };

  beforeEach(() => {
    mockQuantity = 2;
    renderCartItem();
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

      renderCartItem();
      expect(screen.getByText('3')).toBeInTheDocument();
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

      renderCartItem();
      expect(screen.getByText('1')).toBeInTheDocument();
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
