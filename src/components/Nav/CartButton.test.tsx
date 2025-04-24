import { render, screen, fireEvent } from '@testing-library/react';
import CartButton from './CartButton';
import CartDrawer from '../Cart/CartDrawer/CartDrawer';
import { cartStore } from '../../stores/cart-store';
import { Shoe } from '../../types/index';

describe('CartButton', () => {
  beforeEach(() => {
    cartStore.closeDrawer();
  });

  it('displays the correct cart count after adding item', () => {
    const mockShoe: Shoe = {
      picture_url: 'default-image-url',
      name: 'Test Shoe',
      brand: '',
      sizes: ['10'],
      colors: ['Red'],
      colorImages: { Red: ['red-image-url'] },
      description: '',
      prices: { Red: 100 },
    };
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    cartStore.updateQuantity(mockShoe, 'Red', '10', 'increase');

    render(<CartButton />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays the correct shopping bag icon', () => {
    render(<CartButton />);
    const icon = screen.getByText('shopping_bag');
    expect(icon).toBeInTheDocument();
  });

  it('opens the drawer when clicked', async () => {
    render(
      <>
        <CartButton />
        <CartDrawer />
      </>
    );
    const drawer = screen.getByLabelText('Shopping cart', {
      selector: '[role="dialog"]',
    });
    expect(drawer).toHaveClass('translate-x-full');

    fireEvent.click(screen.getByRole('button', { name: 'Open shopping cart' }));

    const drawerTitle = await screen.findByText('Your Bag');
    expect(drawerTitle).toBeInTheDocument();
    expect(drawer).toHaveClass('translate-x-0');
  });
});
