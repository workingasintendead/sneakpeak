import CheckoutSummary from '../../components/Checkout/CheckoutSummary';

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="self-start sticky top-8">
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
