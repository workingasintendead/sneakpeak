import { render, screen } from '@testing-library/react';
import CheckoutSummaryPrice from './CheckoutSummaryPrice';

jest.mock('../../stores/cart-store', () => {
  return {
    cartStore: {
      get cartTotal() {
        return mockCartTotal;
      },
    },
  };
});

let mockCartTotal = 0;

describe('CheckoutSummaryPrice', () => {
  it('renders with free shipping when subtotal is 0', () => {
    mockCartTotal = 0;
    render(<CheckoutSummaryPrice />);

    expect(screen.queryByText('$100.00')).not.toBeInTheDocument();
    expect(screen.queryByText('$120.00')).not.toBeInTheDocument();
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
  });

  it('renders $20 shipping when subtotal is greater than 0, but less than 150', () => {
    mockCartTotal = 100;
    render(<CheckoutSummaryPrice />);

    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('$0.00')).toBeInTheDocument();
    expect(screen.getByText('$120.00')).toBeInTheDocument();
    expect(screen.queryByText('sell')).not.toBeInTheDocument();
    expect(screen.queryByText('TOTAL SAVINGS $20.00')).not.toBeInTheDocument();
  });

  it('renders free shipping and savings when subtotal is 150 or more', () => {
    mockCartTotal = 200;
    render(<CheckoutSummaryPrice />);

    expect(screen.getAllByText('$200.00')).toHaveLength(2);
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('sell')).toBeInTheDocument();
    expect(screen.getByText('TOTAL SAVINGS $20.00')).toBeInTheDocument();
  });
});
