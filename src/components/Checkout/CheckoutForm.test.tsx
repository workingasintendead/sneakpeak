import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import { Stripe } from '@stripe/stripe-js';
import { cartStore } from '../../stores/cart-store';
import { mockCartItem } from '../Cart/__mocks__/mockCartItem';
import userEvent from '@testing-library/user-event';

const confirmCardPaymentMock = jest.fn();
const mockStripe = {
  confirmCardPayment: confirmCardPaymentMock,
} as unknown as Stripe;

jest.mock('@stripe/react-stripe-js', () => {
  const original = jest.requireActual('@stripe/react-stripe-js');
  return {
    ...original,
    useStripe: () => mockStripe,
    useElements: () => ({
      getElement: () => ({ mockCardElement: true }),
    }),
    CardElement: (props: React.ComponentProps<'div'>) => (
      <div data-testid="CardElement" {...props} />
    ),
  };
});

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

const testData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '666-867-5309',
  street: '123 Main St',
  city: 'San Diego',
  state: 'CA',
  zip: '90210',
  country: 'US',
};

const fillForm = () => {
  fireEvent.change(screen.getByPlaceholderText('Name'), {
    target: { value: testData.name },
  });
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: testData.email },
  });
  fireEvent.change(screen.getByPlaceholderText('Phone Number'), {
    target: { value: testData.phone },
  });
  fireEvent.change(screen.getByPlaceholderText('Street Address'), {
    target: { value: testData.street },
  });
  fireEvent.change(screen.getByPlaceholderText('City'), {
    target: { value: testData.city },
  });
  fireEvent.change(screen.getByPlaceholderText('State'), {
    target: { value: testData.state },
  });
  fireEvent.change(screen.getByPlaceholderText('ZIP Code'), {
    target: { value: testData.zip },
  });

  if (testData.country) {
    fireEvent.change(screen.getByPlaceholderText('Country'), {
      target: { value: testData.country },
    });
  }
};

beforeAll(() => {
  cartStore.cart = [mockCartItem];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ clientSecret: 'test-client-secret' }),
    })
  ) as jest.Mock;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CheckoutForm', () => {
  it('submits the form and triggers Stripe', async () => {
    confirmCardPaymentMock.mockResolvedValueOnce({
      paymentIntent: { status: 'succeeded' },
    });
    render(<CheckoutForm />);

    fillForm();

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(confirmCardPaymentMock).toHaveBeenCalledTimes(1);
    });
    expect(confirmCardPaymentMock).toHaveBeenCalledWith('test-client-secret', {
      payment_method: {
        card: { mockCardElement: true },
        billing_details: {
          name: testData.name,
          email: testData.email,
          phone: testData.phone,
          address: {
            line1: testData.street,
            line2: '',
            city: testData.city,
            state: testData.state,
            postal_code: testData.zip,
            country: testData.country,
          },
        },
      },
      shipping: {
        name: testData.name,
        phone: testData.phone,
        address: {
          line1: testData.street,
          line2: '',
          city: testData.city,
          state: testData.state,
          postal_code: testData.zip,
          country: testData.country,
        },
      },
    });
  });

  it('calls confirmCardPayment and clears cart on success', async () => {
    confirmCardPaymentMock.mockResolvedValueOnce({
      paymentIntent: {
        status: 'succeeded',
        payment_method_types: ['card'],
      },
    });

    render(<CheckoutForm />);

    fillForm();

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(confirmCardPaymentMock).toHaveBeenCalledTimes(1);
      expect(pushMock).toHaveBeenCalledWith('/order-confirmation');
    });
    expect(screen.getByPlaceholderText('Name')).toHaveTextContent('');
  });

  it('displays error message if payment fails', async () => {
    confirmCardPaymentMock.mockResolvedValueOnce({
      error: { message: 'Payment failed. Please try again.' },
    });
    render(<CheckoutForm />);

    fillForm();

    fireEvent.submit(screen.getByRole('form'));

    const errorMessage = await screen.findByText(
      /Payment failed. Please try again./i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('error message disappears after 5 seconds', async () => {
    jest.useFakeTimers();
    render(<CheckoutForm />);

    fireEvent.submit(screen.getByRole('form'));

    expect(
      await screen.findByText(/please fill out all required fields/i)
    ).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(
        screen.queryByText(/please fill out all required fields/i)
      ).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it('updates address input values when user types', async () => {
    render(<CheckoutForm />);

    const cityInput = screen.getByPlaceholderText('City') as HTMLInputElement;
    expect(cityInput.value).toBe('');

    await userEvent.clear(cityInput);
    await userEvent.type(cityInput, 'Los Angeles');

    expect(cityInput.value).toBe('Los Angeles');
  });
});
