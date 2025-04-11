import { render, screen } from '@testing-library/react';
import CartList from './CartList';
import { cartStore } from '../../stores/cart-store';
import { mockCartItem } from './__mocks__/mockCartItem';

jest.mock('../../stores/cart-store', () => {
  return {
    cartStore: {
      getCartItems: jest.fn(),
    },
  };
});

describe('CartList', () => {
  it('displays empty message when cart is empty', () => {
    (cartStore.getCartItems as jest.Mock).mockReturnValue([]);
    render(<CartList />);
    expect(screen.getByText('Your bag is empty.')).toBeInTheDocument();
  });

  it('renders CartItem when cart has items', () => {
    (cartStore.getCartItems as jest.Mock).mockReturnValue([mockCartItem]);
    render(<CartList />);
    expect(screen.getByText("UltraBoost 21 Women's")).toBeInTheDocument();
    expect(screen.queryByText('Your bag is empty.')).not.toBeInTheDocument();
  });
});
