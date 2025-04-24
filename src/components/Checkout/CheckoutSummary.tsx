'use client';

import { observer } from 'mobx-react-lite';
import MobileCheckoutSummary from './MobileCheckoutSummary';
import CheckoutSummaryItemList from './CheckoutSummaryItemList';
import CheckoutSummaryPrice from './CheckoutSummaryPrice';

const CheckoutSummary: React.FC = observer(() => {
  return (
    <div className="border rounded-lg p-4 lg:px-6 shadow-md space-y-6">
      <MobileCheckoutSummary />
      <div className="hidden lg:block mb-3">
        <div className="flex justify-between items-center pb-0 mb-3">
          <h2
            className="text-xl font-semibold"
            role="presentation"
            aria-label="Order summary"
          >
            Order Summary
          </h2>
        </div>
        <CheckoutSummaryItemList />
      </div>
      <CheckoutSummaryPrice />
    </div>
  );
});

export default CheckoutSummary;
