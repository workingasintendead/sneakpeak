import Navbar from '../../components/Navbar';
import ShoeGrid from '../../components/ShoeGrid';
import { shoes } from './MockData';

const Men = () => {
  return (
    <div>
      <Navbar />
      <header className="text-center my-4">
        <h1 className="text-white text-3xl font-semibold">Men&apos;s Shoes</h1>
      </header>
      <ShoeGrid shoes={shoes} />
    </div>
  );
};

export default Men;
