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
  test('renders with free shipping when subtotal is 0', () => {
    mockCartTotal = 0;
    render(<CheckoutSummaryPrice />);

    expect(screen.getByLabelText('subtotal')).toHaveTextContent('$0.00');
    expect(screen.getByLabelText('shipping')).toHaveTextContent('FREE');
    expect(screen.getByLabelText('estimated taxes')).toHaveTextContent('$0.00');
    expect(screen.getByLabelText('total')).toHaveTextContent('$0.00');
    expect(screen.getByLabelText('savings')).toHaveTextContent(
      'TOTAL SAVINGS $20.00'
    );
  });

  test('renders $20 shipping when subtotal is greater than 0, but less than 150', () => {
    mockCartTotal = 100;
    render(<CheckoutSummaryPrice />);

    expect(screen.getByLabelText('subtotal')).toHaveTextContent('$100.00');
    expect(screen.getByLabelText('shipping')).toHaveTextContent('$20.00');
    expect(screen.getByLabelText('estimated taxes')).toHaveTextContent('$0.00');
    expect(screen.getByLabelText('total')).toHaveTextContent('$120.00');
    expect(screen.queryByLabelText('savings')).not.toBeInTheDocument();
  });

  test('renders free shipping and savings when subtotal is 150 or more', () => {
    mockCartTotal = 200;
    render(<CheckoutSummaryPrice />);

    expect(screen.getByLabelText('subtotal')).toHaveTextContent('$200.00');
    expect(screen.getByLabelText('shipping')).toHaveTextContent('FREE');
    expect(screen.getByLabelText('estimated taxes')).toHaveTextContent('$0.00');
    expect(screen.getByLabelText('total')).toHaveTextContent('$200.00');
    expect(screen.getByLabelText('savings')).toHaveTextContent(
      'TOTAL SAVINGS $20.00'
    );
  });
});
