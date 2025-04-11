import { render, screen } from '@testing-library/react';
import Shipping from './Shipping';

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    get cartTotal() {
      return mockCartTotal;
    },
  },
}));

let mockCartTotal = 0;

describe('Shipping', () => {
  it('displays $0.00 when subtotal is 0', () => {
    mockCartTotal = 0;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent('$0.00');
  });

  it('displays $20.00 when subtotal is greater than 0 but less than $150', () => {
    mockCartTotal = 100;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent(
      '$20.00'
    );
  });

  it('displays Free when subtotal is $150 or more', () => {
    mockCartTotal = 150;
    render(<Shipping />);
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByLabelText('shipping-amount')).toHaveTextContent('Free');
  });
});
