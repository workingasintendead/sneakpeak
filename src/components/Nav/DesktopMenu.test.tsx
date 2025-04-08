import { render, screen } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';
import { Category } from '../../types/index';

jest.mock('../../stores/edge-config-store', () => ({
  edgeConfigStore: {
    configData: {
      categories: {
        men: { brands: ['Nike'], styles: ['Basketball'] },
        women: { brands: ['Yeezy'], styles: ['Formal'] },
        kids: { brands: ['Reebok'], styles: ['Streetwear'] },
      },
    },
  },
}));

jest.mock('./DesktopCategory', () => ({
  __esModule: true,
  default: ({
    categoryKey,
    category,
  }: {
    categoryKey: string;
    category: Category;
  }) => (
    <div>
      <span>{categoryKey}</span>
      {category && <span>{category.brands.join(', ')}</span>}
    </div>
  ),
}));

describe('DesktopMenu', () => {
  test('renders components for Men, Women, and Kids categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('men')).toBeInTheDocument();
    expect(screen.getByText('women')).toBeInTheDocument();
    expect(screen.getByText('kids')).toBeInTheDocument();
  });

  test('passes the correct props to components', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Yeezy')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
  });
});
