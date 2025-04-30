import { observer } from 'mobx-react-lite';
import { cartStore } from '../../stores/cart-store';
import { CardElement } from '@stripe/react-stripe-js';
import LoadingSpinner from '../LoadingSpinner';
import { Stripe } from '@stripe/stripe-js';

type PaymentFormProps = {
  loading: boolean;
  stripe: Stripe | null;
  handleSubmit: (e: React.FormEvent) => void;
};

const PaymentForm: React.FC<PaymentFormProps> = observer(
  ({ loading, stripe, handleSubmit }) => {
    const total = cartStore.grandTotal;

    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Payment</h2>
        <CardElement
          options={{
            style: {
              base: {
                color: '#555',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '400',
                '::placeholder': {
                  color: '#777',
                },
              },
            },
          }}
          className="p-4 border rounded mb-3"
        />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full h-10 bg-black text-white py-2 rounded hover:bg-gray-900 transition cursor-pointer flex items-center justify-center"
          aria-label="Pay now button"
          onClick={handleSubmit}
        >
          {loading ? <LoadingSpinner /> : `Pay $${total.toFixed(2)}`}
        </button>
      </div>
    );
  }
);

export default PaymentForm;
