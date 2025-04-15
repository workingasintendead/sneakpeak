import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';
import { mockCartItem } from './__mocks__/mockCartItem';
import { cartStore } from '../../stores/cart-store';
import '@testing-library/jest-dom';

let mockQuantity = 2;
let rerender: ReturnType<typeof render>['rerender'];

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    updateQuantity: jest.fn((shoe, color, size, action) => {
      if (action === 'increase') mockQuantity += 1;
      else if (action === 'decrease') mockQuantity -= 1;
    }),
  },
}));

describe('CartItem', () => {
  beforeEach(() => {
    mockQuantity = 2;
    ({ rerender } = render(
      <CartItem cartItem={{ ...mockCartItem, quantity: mockQuantity }} />
    ));
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
      expect(screen.getByLabelText('quantity')).toHaveTextContent('2');
      expect(screen.getByLabelText('quantity')).not.toHaveTextContent('3');

      fireEvent.click(increaseButton);

      expect(cartStore.updateQuantity).toHaveBeenCalledWith(
        mockCartItem.shoe,
        mockCartItem.selectedColor,
        mockCartItem.selectedSize,
        'increase'
      );

      rerender(
        <CartItem cartItem={{ ...mockCartItem, quantity: mockQuantity }} />
      );
      expect(screen.getByLabelText('quantity')).toHaveTextContent('3');
      expect(screen.getByLabelText('quantity')).not.toHaveTextContent('2');
    });

    it('calls updateQuantity with "decrease" when - is clicked', () => {
      const decreaseButton = screen.getByText('-');
      expect(screen.getByLabelText('quantity')).toHaveTextContent('2');
      expect(screen.getByLabelText('quantity')).not.toHaveTextContent('1');

      fireEvent.click(decreaseButton);

      expect(cartStore.updateQuantity).toHaveBeenCalledWith(
        mockCartItem.shoe,
        mockCartItem.selectedColor,
        mockCartItem.selectedSize,
        'decrease'
      );

      rerender(
        <CartItem cartItem={{ ...mockCartItem, quantity: mockQuantity }} />
      );
      expect(screen.getByLabelText('quantity')).toHaveTextContent('1');
      expect(screen.getByLabelText('quantity')).not.toHaveTextContent('2');
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
