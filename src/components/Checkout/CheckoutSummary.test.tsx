import { render, screen, within } from '@testing-library/react';
import CheckoutSummary from './CheckoutSummary';
import { mockCartItem } from '../Cart/__mocks__/mockCartItem';

let mockCartTotal = 0;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    getCartItems: () => [mockCartItem],
    get cartTotal() {
      return mockCartTotal;
    },
  },
}));

describe('CheckoutSummary', () => {
  beforeEach(() => {
    mockCartTotal = 0;
  });

  it('renders the desktop order summary title', () => {
    render(<CheckoutSummary />);
    const desktopSection = screen.getByRole('presentation', {
      name: 'Order summary',
    });
    const title = within(desktopSection).getAllByText('Order Summary');

    expect(title).toHaveLength(1);
  });

  it('renders only one visible cart item name in desktop summary', () => {
    render(<CheckoutSummary />);

    expect(screen.getAllByText(mockCartItem.shoe.name)).toHaveLength(2);
  });

  it('renders subtotal, shipping, taxes, and total', () => {
    render(<CheckoutSummary />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('Estimated taxes')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('shows FREE shipping if subtotal is above 150', () => {
    mockCartTotal = 160;
    render(<CheckoutSummary />);

    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
  });

  it('shows $20.00 shipping if subtotal is below 150', () => {
    mockCartTotal = 120;
    render(<CheckoutSummary />);

    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.queryByText('sell')).not.toBeInTheDocument();
    expect(screen.queryByText('FREE')).not.toBeInTheDocument();
  });
});
