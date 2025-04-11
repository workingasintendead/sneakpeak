import Navbar from '../../components/Nav/Navbar';
import CartList from '../../components/Cart/CartList';
import CartSummary from '../../components/Cart/CartSummary';

const CartPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartList />
        </div>
        <div className="self-start">
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default CartPage;
