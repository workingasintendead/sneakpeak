import ProductPage from '../../components/ProductPages/ProductPage';
import { AudienceCategory } from '../../types/enumerations';

const MensPage = () => {
  return <ProductPage category={AudienceCategory.Men} />;
};

export default MensPage;
