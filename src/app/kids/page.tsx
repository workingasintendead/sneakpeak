import ProductPage from '../../components/ProductPages/ProductPage';
import { AudienceCategory } from '../../types/enumerations';

const KidsPage = () => {
  return <ProductPage category={AudienceCategory.Kids} />;
};

export default KidsPage;
