import { render, screen } from '@testing-library/react';
import CheckoutSummaryPrice from './CheckoutSummaryPrice';

let mockCartSubTotal = 0;

jest.mock('../../stores/cart-store', () => {
  return {
    cartStore: {
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
        return (
          mockCartSubTotal +
          (mockCartSubTotal > 0 && mockCartSubTotal < 150 ? 20 : 0)
        );
      },
    },
  };
});

describe('CheckoutSummaryPrice', () => {
  it('renders with free shipping when subtotal is 0', () => {
    mockCartSubTotal = 0;
    render(<CheckoutSummaryPrice />);

    expect(screen.queryByText('$100.00')).not.toBeInTheDocument();
    expect(screen.queryByText('$120.00')).not.toBeInTheDocument();
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
  });

  it('renders $20 shipping when subtotal is greater than 0, but less than 150', () => {
    mockCartSubTotal = 100;
    render(<CheckoutSummaryPrice />);

    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('$0.00')).toBeInTheDocument();
    expect(screen.getByText('$120.00')).toBeInTheDocument();
    expect(screen.queryByText('sell')).not.toBeInTheDocument();
    expect(screen.queryByText('TOTAL SAVINGS $20.00')).not.toBeInTheDocument();
  });

  it('renders free shipping and savings when subtotal is 150 or more', () => {
    mockCartSubTotal = 200;
    render(<CheckoutSummaryPrice />);

    expect(screen.getAllByText('$200.00')).toHaveLength(2);
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
    expect(screen.getByText('TOTAL SAVINGS $20.00')).toBeInTheDocument();
  });
});
