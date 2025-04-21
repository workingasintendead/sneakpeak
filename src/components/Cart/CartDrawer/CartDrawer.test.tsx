import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CartDrawer from './CartDrawer';
import { cartStore } from '../../../stores/cart-store';
import { mockData } from '../../../data/MockData';

beforeEach(() => {
  cartStore.cart = [];
  cartStore.openDrawer();
});

describe('CartDrawer', () => {
  it('shows drawer when open', async () => {
    cartStore.closeDrawer();
    render(<CartDrawer />);

    const drawer = screen.getByLabelText('Shopping cart', {
      selector: '[role="dialog"]',
    });

    expect(drawer).toHaveAttribute('aria-hidden', 'true');

    cartStore.openDrawer();

    await waitFor(() => expect(drawer).toHaveAttribute('aria-hidden', 'false'));
  });

  it('is hidden when drawer is closed', () => {
    render(<CartDrawer />);
    const drawer = screen.getByLabelText('Shopping cart', {
      selector: '[role="dialog"]',
    });

    expect(drawer).toHaveAttribute('aria-hidden', 'false');

    fireEvent.click(screen.getByRole('button', { name: 'close' }));

    expect(drawer).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders empty cart content when cart is empty', () => {
    cartStore.openDrawer();
    render(<CartDrawer />);
    expect(screen.getByText('Your bag is empty.')).toBeInTheDocument();
  });

  it('renders cart items when cart has items', async () => {
    const [shoe1, shoe2] = mockData.kids;
    cartStore.openDrawer();
    render(<CartDrawer />);

    expect(screen.getByText('Your bag is empty.')).toBeInTheDocument();
    expect(screen.queryByText(shoe1.name)).not.toBeInTheDocument();
    expect(screen.queryByText(shoe2.name)).not.toBeInTheDocument();

    cartStore.updateQuantity(shoe1, 'Pink', '5', 'increase');
    cartStore.updateQuantity(shoe2, 'White', '6', 'increase');

    await waitFor(() =>
      expect(screen.queryByText('Your bag is empty.')).not.toBeInTheDocument()
    );
    expect(screen.getByText(shoe1.name)).toBeInTheDocument();
    expect(screen.getByText(shoe2.name)).toBeInTheDocument();
  });

  it('correctly updates when cart items are added and removed', async () => {
    const [shoe1, shoe2] = mockData.kids;
    cartStore.updateQuantity(shoe1, 'Pink', '5', 'increase');
    cartStore.updateQuantity(shoe2, 'White', '6', 'increase');
    cartStore.openDrawer();
    render(<CartDrawer />);

    expect(screen.queryByText('Your bag is empty.')).not.toBeInTheDocument();
    expect(screen.getByText(shoe1.name)).toBeInTheDocument();
    expect(screen.getByText(shoe2.name)).toBeInTheDocument();

    cartStore.updateQuantity(shoe1, 'Pink', '5', 'decrease');
    cartStore.updateQuantity(shoe2, 'White', '6', 'decrease');

    await waitFor(() =>
      expect(screen.getByText('Your bag is empty.')).toBeInTheDocument()
    );
    expect(screen.queryByText(shoe1.name)).not.toBeInTheDocument();
    expect(screen.queryByText(shoe2.name)).not.toBeInTheDocument();
  });

  it('hides the drawer when overlay is clicked', () => {
    render(<CartDrawer />);
    const drawer = screen.getByLabelText('Shopping cart', {
      selector: '[role="dialog"]',
    });

    expect(drawer).toHaveAttribute('aria-hidden', 'false');

    const overlay = screen.getByRole('button', { name: 'Close cart overlay' });
    fireEvent.click(overlay);

    expect(drawer).toHaveAttribute('aria-hidden', 'true');
  });
});
