import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutPaymentForm from './CheckoutPaymentForm';

const mockGrandTotal = 100.0;

jest.mock('../../stores/cart-store', () => ({
  cartStore: {
    get grandTotal() {
      return mockGrandTotal;
    },
  },
}));

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: jest.fn(() => <div>CardElement</div>),
}));

describe('CheckoutPaymentForm', () => {
  const mockHandleSubmit = jest.fn();
  const defaultProps = {
    loading: false,
    submitDisabled: false,
    handleSubmit: mockHandleSubmit,
  };

  it('renders CardElement and submit button correctly', () => {
    render(<CheckoutPaymentForm {...defaultProps} />);

    expect(screen.getByText('CardElement')).toBeInTheDocument();
    expect(screen.getByText('Pay $100.00')).toBeInTheDocument();
  });

  it('disables submit button when loading or stripe is not available', () => {
    render(<CheckoutPaymentForm {...defaultProps} loading={true} />);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();

    render(
      <CheckoutPaymentForm
        {...defaultProps}
        loading={false}
        submitDisabled={true}
      />
    );

    expect(button).toBeDisabled();
  });

  it('shows loading spinner when loading is true', () => {
    render(<CheckoutPaymentForm {...defaultProps} loading={true} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText('Pay $100.00')).toBeNull();
  });

  it('calls handleSubmit when the form is submitted', () => {
    render(<CheckoutPaymentForm {...defaultProps} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not call handleSubmit if stripe is not available', () => {
    jest.clearAllMocks();
    render(<CheckoutPaymentForm {...defaultProps} submitDisabled={true} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(0);
  });
});
