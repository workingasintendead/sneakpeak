import CheckoutSummary from '../../components/Checkout/CheckoutSummary';

const CheckoutPage: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">FORMS AND SUCH WILL BE HERE</div>
        <div className="self-start">
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
