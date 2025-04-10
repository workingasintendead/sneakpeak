import { render, screen } from '@testing-library/react';
import CartButton from './CartButton';
import { cartStore } from '../../stores/cart-store';
import { Shoe } from '../../types/index';

describe('CartButton', () => {
  beforeEach(() => {
    cartStore.clearCart();
  });

  it('button renders', () => {
    render(<CartButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
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

    cartStore.addItem(mockShoe, 'Red', '10');

    render(<CartButton />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays the correct shopping bag icon', () => {
    render(<CartButton />);
    const icon = screen.getByText(/shopping_bag/i);
    expect(icon).toBeInTheDocument();
  });
});
