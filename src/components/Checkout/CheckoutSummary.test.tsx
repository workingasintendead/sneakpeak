import { render, screen, within } from '@testing-library/react';
import CheckoutSummary from './CheckoutSummary';
import { mockCartItem } from '../Cart/__mocks__/mockCartItem';

let mockCartSubTotal = 0;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    getCartItems: () => [mockCartItem],
    get cartSubTotal() {
      return mockCartSubTotal;
    },
    get shippingCost() {
      return mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0;
    },
    get taxEstimate() {
      return 0;
    },
    get grandTotal() {
      const shipping = mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0;
      return mockCartSubTotal + shipping;
    },
  },
}));

describe('CheckoutSummary', () => {
  beforeEach(() => {
    mockCartSubTotal = 0;
  });

  it('renders the desktop order summary title', () => {
    render(<CheckoutSummary />);
    const desktopSection = screen.getByLabelText('Order summary');
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
    mockCartSubTotal = 160;
    render(<CheckoutSummary />);

    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
  });

  it('shows $20.00 shipping if subtotal is below 150', () => {
    mockCartSubTotal = 120;
    render(<CheckoutSummary />);

    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.queryByText('sell')).not.toBeInTheDocument();
    expect(screen.queryByText('FREE')).not.toBeInTheDocument();
  });
});
