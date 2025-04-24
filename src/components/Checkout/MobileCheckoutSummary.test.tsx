import { render, screen, fireEvent } from '@testing-library/react';
import MobileCheckoutSummary from './MobileCheckoutSummary';
import { cartStore } from '../../stores/cart-store';
import { mockCartItem } from '../Cart/__mocks__/mockCartItem';

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    getCartItems: jest.fn(),
  },
}));

Object.defineProperty(HTMLDivElement.prototype, 'scrollHeight', {
  value: 3000,
  writable: true,
});

describe('MobileCheckoutSummary', () => {
  beforeEach(() => {
    cartStore.getCartItems = jest.fn().mockReturnValue([mockCartItem]);
  });

  it('renders the "Order Summary" title and "Show" button initially', () => {
    render(<MobileCheckoutSummary />);

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Show')).toBeInTheDocument();
    expect(screen.getByText('keyboard_arrow_down')).toBeInTheDocument();
    expect(
      screen.getByRole('presentation', { name: 'Order Summary Items' })
    ).toHaveStyle('max-height: 0px');
  });

  it('shows CheckoutSummaryItemList when "Show" button is clicked', async () => {
    render(<MobileCheckoutSummary />);

    expect(screen.getByText('Show')).toBeInTheDocument();
    expect(screen.getByText('keyboard_arrow_down')).toBeInTheDocument();
    expect(
      screen.getByRole('presentation', { name: 'Order Summary Items' })
    ).toHaveStyle('max-height: 0px');

    fireEvent.click(screen.getByText('Show'));

    expect(
      screen.getByRole('presentation', { name: 'Order Summary Items' })
    ).toHaveStyle('max-height: 3000px');
    expect(screen.getByText('Hide')).toBeInTheDocument();
    expect(screen.getByText('keyboard_arrow_up')).toBeInTheDocument();
  });

  it('hides CheckoutSummaryItemList when "Hide" button is clicked', async () => {
    render(<MobileCheckoutSummary />);
    fireEvent.click(screen.getByText('Show'));

    fireEvent.click(screen.getByText('Hide'));

    expect(screen.getByText('Show')).toBeInTheDocument();
    expect(
      screen.getByRole('presentation', { name: 'Order Summary Items' })
    ).toHaveStyle('max-height: 0px');
  });

  it('animates the visibility correctly', async () => {
    render(<MobileCheckoutSummary />);

    const content = screen.getByRole('presentation', {
      name: 'Order Summary Items',
    });
    expect(content).toHaveStyle('max-height: 0px');

    fireEvent.click(screen.getByText('Show'));

    expect(content).toHaveStyle('max-height: 3000px');
  });
});
