import { render, screen, fireEvent } from '@testing-library/react';
import CartDrawerList from './CartDrawerList';
import { CartItem as CartItemType } from '../../../types';
import { mockData } from '../../../data/MockData';

const [shoe1, shoe2] = mockData.kids;
const mockCartItems: CartItemType[] = [
  {
    shoe: shoe1,
    selectedColor: 'Pink',
    selectedSize: '5',
    selectedPrice: shoe1.prices['Pink'],
    quantity: 1,
  },
  {
    shoe: shoe2,
    selectedColor: 'White',
    selectedSize: '6',
    selectedPrice: shoe2.prices['White'],
    quantity: 2,
  },
];

describe('CartDrawerList', () => {
  it('renders cart items', () => {
    render(
      <CartDrawerList
        cartItems={mockCartItems}
        subtotal={230}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByText('Air Max 97 Kids')).toBeInTheDocument();
    expect(screen.getByText('UltraBoost 21 Kids')).toBeInTheDocument();
    expect(screen.getAllByText(/Size:/i)).toHaveLength(2);
  });

  it('displays correct subtotal', () => {
    render(
      <CartDrawerList
        cartItems={mockCartItems}
        subtotal={230}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByLabelText('checkout button')).toHaveTextContent(
      `CHECKOUT ● $230`
    );
  });

  it('calls onClose when checkout is clicked', () => {
    const onClose = jest.fn();
    render(
      <CartDrawerList
        cartItems={mockCartItems}
        subtotal={230}
        onClose={onClose}
      />
    );

    expect(onClose).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByLabelText('checkout button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('shows shipping & taxes message', () => {
    render(
      <CartDrawerList
        cartItems={mockCartItems}
        subtotal={230}
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByText('Shipping & taxes calculated at checkout')
    ).toBeInTheDocument();
  });
});
