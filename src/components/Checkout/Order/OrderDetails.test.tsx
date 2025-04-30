import { render, screen } from '@testing-library/react';
import OrderDetails from './OrderDetails';
import { CartItem } from '../../../types';
import { mockData } from '../../../data/MockData';

const mockItems: CartItem[] = [
  {
    shoe: mockData.men[0],
    selectedColor: 'Black',
    selectedSize: '10',
    selectedPrice: 140,
    quantity: 2,
  },
  {
    shoe: mockData.men[1],
    selectedColor: 'White',
    selectedSize: '9',
    selectedPrice: 170,
    quantity: 1,
  },
];

describe('OrderDetails', () => {
  it('renders order item details correctly', () => {
    render(
      <OrderDetails
        items={mockItems}
        subTotal={450}
        shipping={0}
        taxes={15}
        grandTotal={465}
      />
    );

    expect(screen.getByText('Air Max 97')).toBeInTheDocument();
    expect(screen.getByText('Black / 10')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('$465.00')).toBeInTheDocument();
  });

  it('displays correct totals with free shipping', () => {
    render(
      <OrderDetails
        items={mockItems}
        subTotal={450}
        shipping={0}
        taxes={15}
        grandTotal={465}
      />
    );

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$450.00')).toBeInTheDocument();

    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toHaveClass('line-through');

    expect(screen.getByText('Taxes')).toBeInTheDocument();
    expect(screen.getByText('$15.00')).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$465.00')).toBeInTheDocument();
  });

  it('displays correct shipping cost when not free', () => {
    render(
      <OrderDetails
        items={mockItems}
        subTotal={450}
        shipping={20}
        taxes={15}
        grandTotal={485}
      />
    );

    expect(screen.queryByText('FREE')).not.toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
  });
});
