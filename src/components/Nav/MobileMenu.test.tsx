import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { edgeConfigStore } from '../../stores/edge-config-store';

jest.mock('../../stores/edge-config-store');

describe('MobileMenu', () => {
  const closeMock = jest.fn();

  it.each([
    ['men', 'Men', ['Sport', 'Crosstraining'], ['Nike', 'Adidas']],
    ['women', 'Women', ['Elegant', 'Designer'], ['Puma', 'Reebok']],
    ['kids', 'Kids', ['Play', 'Casual'], ['New Balance', 'Converse']],
  ])(
    'renders the category correctly',
    (categoryKey, title, shoestyles, shoebrands) => {
      render(<MobileMenu isOpen={true} close={closeMock} />);

      expect(screen.getByText(title)).toBeInTheDocument();

      shoestyles.forEach((style) => {
        expect(screen.getByText(style)).toBeInTheDocument();
      });

      shoebrands.forEach((brand) => {
        expect(screen.getByText(brand)).toBeInTheDocument();
      });
    }
  );

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
