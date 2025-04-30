import { render, screen } from '@testing-library/react';
import Shipping from './Shipping';

let mockCartSubTotal = 0;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    get cartSubTotal() {
      return mockCartSubTotal;
    },
    get shippingCost() {
      return mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0;
    },
  },
}));

describe('Shipping', () => {
  it('displays $0.00 when subtotal is 0', () => {
    mockCartSubTotal = 0;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent('$0.00');
  });

  it('displays $20.00 when subtotal is greater than 0 but less than $150', () => {
    mockCartSubTotal = 100;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent(
      '$20.00'
    );
  });

  it('displays Free when subtotal is $150 or more', () => {
    mockCartSubTotal = 150;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent('Free');
  });
});
