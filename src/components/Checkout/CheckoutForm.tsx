import { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CheckoutContactForm from './CheckoutContactForm';
import CheckoutAddressForm from './CheckoutAddressForm';
import CheckoutPaymentForm from './CheckoutPaymentForm';
import { cartStore } from '../../stores/cart-store';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
};

const CheckoutForm: React.FC = observer(() => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'US',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name in form.address) {
      setForm({
        ...form,
        address: {
          ...form.address,
          [name]: value,
        },
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      } as FormData);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address.line1 ||
      !form.address.city ||
      !form.address.postal_code
    ) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: cartStore.cartTotal * 100,
        }),
      });

      const { clientSecret } = await response.json();
      const cardElement = elements?.getElement(CardElement);

      if (!stripe || !clientSecret || !cardElement) {
        throw new Error('Stripe is not initialized properly.');
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
          },
        },
        shipping: {
          name: form.name,
          phone: form.phone,
          address: form.address,
        },
      });

      if (result.error) {
        console.log(result.error.message);
        setErrorMessage(
          result.error.message || 'Payment failed. Please try again.'
        );
      } else if (result.paymentIntent?.status === 'succeeded') {
        cartStore.clearCart();
        router.push('/');
      } else {
        throw new Error('Unexpected payment result.');
      }
    } catch (err) {
      console.error('Error submitting payment:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <form
      role="form"
      onSubmit={handleSubmit}
      className="border rounded-lg space-y-6 p-4 lg:px-6 shadow-md"
    >
      <CheckoutContactForm form={form} handleChange={handleChange} />
      <CheckoutAddressForm address={form.address} handleChange={handleChange} />
      <CheckoutPaymentForm
        loading={loading}
        stripe={stripe}
        cartTotal={cartStore.cartTotal}
        handleSubmit={handleSubmit}
      />
      {errorMessage && (
        <div className="text-red-600 bg-red-100 border border-red-300 rounded p-3">
          {errorMessage}
        </div>
      )}
    </form>
  );
});

export default CheckoutForm;
