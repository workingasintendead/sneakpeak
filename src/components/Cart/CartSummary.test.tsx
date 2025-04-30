import { render, screen } from '@testing-library/react';
import CartSummary from './CartSummary';

let mockCartSubTotal = 0;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    get cartSubTotal() {
      return mockCartSubTotal;
    },
    get shippingCost() {
      return mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0;
    },
    get grandTotal() {
      return (
        mockCartSubTotal +
        (mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0)
      );
    },
  },
}));

describe('CartSummary', () => {
  it('displays zero subtotal and total when cart is empty', () => {
    mockCartSubTotal = 0;

    render(<CartSummary />);
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByLabelText('subtotal-amount')).toHaveTextContent('$0.00');

    const allZeroes = screen.getAllByText('$0.00');
    expect(allZeroes.length).toBeGreaterThanOrEqual(2);
  });

  it('adds shipping when subtotal is below $150', () => {
    mockCartSubTotal = 100;

    render(<CartSummary />);

    expect(screen.getByLabelText('subtotal-amount')).toHaveTextContent(
      '$100.00'
    );

    expect(screen.getByLabelText('total-amount')).toHaveTextContent('$120.00');
  });

  it('does not charge shipping when subtotal is $150 or more', () => {
    mockCartSubTotal = 180;

    render(<CartSummary />);
    expect(screen.getByLabelText('subtotal-amount')).toHaveTextContent(
      '$180.00'
    );

    expect(screen.getByLabelText('total-amount')).toHaveTextContent('$180.00');
  });
});
