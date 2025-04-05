import { render, screen } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';
import { Category } from './DesktopCategory';

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

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
  });

  test('passes the correct props to components', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Yeezy')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
  });
});
