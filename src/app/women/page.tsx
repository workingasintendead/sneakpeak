import ProductPage from '../../components/ProductPages/ProductPage';
import { AudienceCategory } from '../../types/enumerations';

const WomensPage = () => {
  return <ProductPage category={AudienceCategory.Women} />;
};

export default WomensPage;
