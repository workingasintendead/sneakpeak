import { render, screen } from '@testing-library/react';
import OrderSummary from './OrderSummary';

const mockOrder = {
  customer: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '666-867-5309',
    address: {
      line1: '123 Main St',
      line2: 'Apt 4B',
      city: 'San Diego',
      state: 'CA',
      postal_code: '90210',
      country: 'US',
    },
  },
  estimatedTimeOfArrival: '3-5 business days',
  payment: {
    type: 'card',
  },
  dateOfPurchase: '4/1/2025',
};

describe('OrderSummary', () => {
  it('renders shipping details with all fields correctly', () => {
    render(
      <OrderSummary
        customer={mockOrder.customer}
        estimatedTimeOfArrival={mockOrder.estimatedTimeOfArrival}
        paymentType={mockOrder.payment.type}
        dateOfPurchase={mockOrder.dateOfPurchase}
      />
    );

    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Apt 4B')).toBeInTheDocument();
    expect(screen.getByText(/San Diego/)).toBeInTheDocument();
    expect(screen.getByText(/CA/)).toBeInTheDocument();
    expect(screen.getByText(/90210/)).toBeInTheDocument();
    expect(screen.getByText(/US/)).toBeInTheDocument();
    expect(screen.getByText('3-5 business days')).toBeInTheDocument();
  });

  it('renders shipping details correctly without line2 when line2 is empty', () => {
    const customerWithoutLine2 = {
      ...mockOrder,
      customer: {
        ...mockOrder.customer,
        address: {
          ...mockOrder.customer.address,
          line2: '',
        },
      },
    };
    render(
      <OrderSummary
        customer={customerWithoutLine2.customer}
        estimatedTimeOfArrival={mockOrder.estimatedTimeOfArrival}
        paymentType={mockOrder.payment.type}
        dateOfPurchase={mockOrder.dateOfPurchase}
      />
    );

    expect(screen.queryByText('Apt 4B')).not.toBeInTheDocument();
  });

  it('renders estimated delivery (estimatedTimeOfArrival) correctly', () => {
    render(
      <OrderSummary
        customer={mockOrder.customer}
        estimatedTimeOfArrival={mockOrder.estimatedTimeOfArrival}
        paymentType={mockOrder.payment.type}
        dateOfPurchase={mockOrder.dateOfPurchase}
      />
    );

    expect(screen.getByText('3-5 business days')).toBeInTheDocument();
  });

  it('renders date of purchase correctly', () => {
    render(
      <OrderSummary
        customer={mockOrder.customer}
        estimatedTimeOfArrival={mockOrder.estimatedTimeOfArrival}
        paymentType={mockOrder.payment.type}
        dateOfPurchase={mockOrder.dateOfPurchase}
      />
    );

    expect(screen.getByText('4/1/2025')).toBeInTheDocument();
  });

  it('renders payment type correctly', () => {
    render(
      <OrderSummary
        customer={mockOrder.customer}
        estimatedTimeOfArrival={mockOrder.estimatedTimeOfArrival}
        paymentType={mockOrder.payment.type}
        dateOfPurchase={mockOrder.dateOfPurchase}
      />
    );

    expect(screen.getByText('card')).toBeInTheDocument();
  });
});
