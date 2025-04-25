'use client';

import CheckoutSummary from '../../components/Checkout/CheckoutSummary';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/Checkout/CheckoutForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
        <div className="self-start sticky top-8">
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
