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
    const desktopSection = screen.getByLabelText('Desktop summary');
    const title = within(desktopSection).getAllByText('Order Summary');
    expect(title).toHaveLength(1);
  });

  it('renders only one visible cart item name in desktop summary', () => {
    render(<CheckoutSummary />);

    const desktopSection = screen.getByLabelText('Desktop summary');
    const item = within(desktopSection).getAllByText(mockCartItem.shoe.name);
    expect(item).toHaveLength(1);
  });

  it('renders subtotal, shipping, taxes, and total', () => {
    render(<CheckoutSummary />);
    expect(screen.getByLabelText('subtotal')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('estimated taxes')).toBeInTheDocument();
    expect(screen.getByLabelText('total')).toBeInTheDocument();
  });

  it('shows FREE shipping if subtotal is above 150', () => {
    mockCartTotal = 160;
    render(<CheckoutSummary />);
    expect(screen.getByLabelText('shipping')).toHaveTextContent('FREE');
    expect(screen.getByLabelText('savings')).toBeInTheDocument();
  });

  it('shows $20.00 shipping if subtotal is below 150', () => {
    mockCartTotal = 120;
    render(<CheckoutSummary />);
    expect(screen.getByLabelText('shipping')).toHaveTextContent('$20.00');
    expect(screen.queryByLabelText('savings')).not.toBeInTheDocument();
  });
});
