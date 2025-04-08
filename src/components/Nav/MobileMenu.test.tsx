import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { edgeConfigStore } from '../../stores/edge-config-store';
import '@testing-library/jest-dom';

jest.mock('../../stores/edge-config-store', () => ({
  edgeConfigStore: {
    configData: {
      categories: {
        men: {
          title: 'Men',
          brands: ['Nike', 'Adidas'],
          styles: ['Sport', 'Crosstraining'],
        },
        women: {
          title: 'Women',
          brands: ['Puma', 'Reebok'],
          styles: ['Elegant', 'Designer'],
        },
        kids: {
          title: 'Kids',
          brands: ['New Balance', 'Converse'],
          styles: ['Play', 'Casual'],
        },
      },
    },
    uniqueBrands: [
      'Nike',
      'Adidas',
      'Puma',
      'Reebok',
      'New Balance',
      'Converse',
    ],
  },
}));

describe('MobileMenu', () => {
  const closeMock = jest.fn();

  it.each([
    ['men', 'Men', ['Sport', 'Crosstraining'], ['Nike', 'Adidas']],
    ['women', 'Women', ['Elegant', 'Designer'], ['Puma', 'Reebok']],
    ['kids', 'Kids', ['Play', 'Casual'], ['New Balance', 'Converse']],
  ])('renders the category correctly', (categoryKey, title, styles, brands) => {
    render(<MobileMenu isOpen={true} close={closeMock} />);

    expect(screen.getByText(title)).toBeInTheDocument();

    styles.forEach((style) => {
      expect(screen.getByText(style)).toBeInTheDocument();
    });

    brands.forEach((brand) => {
      expect(screen.getByText(brand)).toBeInTheDocument();
    });
  });

  it('applies the correct classes based on the isOpen prop', () => {
    const { rerender } = render(<MobileMenu isOpen={true} close={closeMock} />);
    expect(screen.getByRole('dialog')).toHaveClass('translate-x-0');

    rerender(<MobileMenu isOpen={false} close={closeMock} />);

    expect(screen.getByRole('dialog')).toHaveClass('translate-x-full');
  });

  it('calls the close function when the close button is clicked', () => {
    render(<MobileMenu isOpen={true} close={closeMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it('does not render categories or brands when configData is missing', () => {
    edgeConfigStore.configData = { categories: {} };
    edgeConfigStore.uniqueBrands = new Set<string>();

    render(<MobileMenu isOpen={true} close={closeMock} />);

    expect(screen.queryByText('Men')).not.toBeInTheDocument();
    expect(screen.queryByText('Nike')).not.toBeInTheDocument();
  });
});
