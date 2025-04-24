import { render, screen } from '@testing-library/react';
import CheckoutSummaryItemList from './CheckoutSummaryItemList';
import { cartStore } from '../../stores/cart-store';
import { mockCartItem } from '../Cart/__mocks__/mockCartItem';

describe('CheckoutSummaryItemList', () => {
  it('renders cart items correctly', () => {
    cartStore.getCartItems = jest.fn().mockReturnValue([mockCartItem]);
    render(<CheckoutSummaryItemList />);

    expect(screen.getByText("UltraBoost 21 Women's")).toBeInTheDocument();
    expect(screen.getByText('Pink / 9')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('$360.00')).toBeInTheDocument();
    expect(screen.getByAltText("UltraBoost 21 Women's")).toBeInTheDocument();
  });

  it('renders nothing if cart is empty', () => {
    cartStore.getCartItems = jest.fn().mockReturnValue([]);
    render(<CheckoutSummaryItemList />);

    expect(
      screen.queryByText(/UltraBoost 21 Women's/i)
    ).not.toBeInTheDocument();
  });
});
