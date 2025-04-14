import { render, screen } from '@testing-library/react';
import CartButton from './CartButton';
import { cartStore } from '../../stores/cart-store';
import { Shoe } from '../../types/index';

describe('CartButton', () => {
  it('cart link renders', () => {
    render(<CartButton />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('displays the correct cart count after adding item', () => {
    const mockShoe: Shoe = {
      picture_url: '',
      name: 'Test Shoe',
      brand: '',
      sizes: ['10'],
      colors: ['Red'],
      colorImages: { Red: '' },
      description: '',
      prices: { Red: 100 },
    };
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    cartStore.increaseQuantity(mockShoe, 'Red', '10', 'add');

    render(<CartButton />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays the correct shopping bag icon', () => {
    render(<CartButton />);
    const icon = screen.getByText(/shopping_bag/i);
    expect(icon).toBeInTheDocument();
  });
});
