import { render, screen, fireEvent } from '@testing-library/react';
import CartDrawer from './CartDrawer';
import { cartStore } from '../../../stores/cart-store';
import { mockData } from '../../../data/MockData';

beforeEach(() => {
  jest.restoreAllMocks();
  cartStore.cart = [];
  cartStore.closeDrawer();
});

describe('CartDrawer', () => {
  it('renders when drawer is open', () => {
    cartStore.openDrawer();
    render(<CartDrawer />);
    expect(screen.getByText('Your Bag')).toBeVisible();
  });

  it('is hidden when drawer is closed', () => {
    render(<CartDrawer />);
    expect(screen.getByTestId('cart-drawer')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('renders empty cart content when cart is empty', () => {
    cartStore.openDrawer();
    render(<CartDrawer />);
    expect(screen.getByText('Your bag is empty.')).toBeInTheDocument();
  });

  it('renders cart items when cart has items', () => {
    const [shoe1, shoe2] = mockData.kids;
    cartStore.updateQuantity(shoe1, 'Pink', '5', 'increase');
    cartStore.updateQuantity(shoe2, 'White', '6', 'increase');
    cartStore.openDrawer();

    render(<CartDrawer />);

    expect(screen.queryByText(/your bag is empty/i)).not.toBeInTheDocument();

    expect(screen.getByText(shoe1.name)).toBeInTheDocument();
    expect(screen.getByText(shoe2.name)).toBeInTheDocument();
  });

  it('hides the drawer when close icon is clicked', () => {
    cartStore.openDrawer();
    render(<CartDrawer />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(screen.getByTestId('cart-drawer')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('hides the drawer when overlay is clicked', () => {
    cartStore.openDrawer();
    render(<CartDrawer />);

    expect(screen.getByTestId('cart-drawer')).toHaveAttribute(
      'aria-hidden',
      'false'
    );

    const overlay = screen.getByTestId('cart-overlay');
    fireEvent.click(overlay);

    expect(screen.getByTestId('cart-drawer')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });
});
