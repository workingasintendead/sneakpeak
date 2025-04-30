import { OrderStore } from '../stores/order-store';
import { OrderData, Shoe, CartItem } from '../types';
import { mockData } from '../data/MockData';

describe('OrderStore', () => {
  let store: OrderStore;

  const mockShoe: Shoe = mockData.men[0];

  const mockCartItem: CartItem = {
    shoe: mockShoe,
    selectedSize: '9',
    selectedColor: 'Black',
    selectedPrice: 140,
    quantity: 2,
  };

  const mockOrder: OrderData = {
    items: [mockCartItem],
    subTotal: 280,
    shipping: 20,
    taxes: 0,
    grandTotal: 300,
    estimatedTimeOfArrival: '3-5 business days',
    customer: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '666-867-5309',
      address: {
        line1: '123 Main St',
        line2: 'Apt 16',
        city: 'San Diego',
        state: 'CA',
        postal_code: '90210',
        country: 'USA',
      },
    },
    payment: {
      type: 'card',
    },
    dateOfPurchase: '2025-05-01',
  };

  beforeEach(() => {
    store = new OrderStore();
  });

  test('initial order is null', () => {
    expect(store.order).toBeNull();
  });

  test('setOrder sets the order correctly', () => {
    expect(store.order).toBeNull();
    store.setOrder(mockOrder);
    expect(store.order).toEqual(mockOrder);
  });

  test('clear sets order to null', () => {
    store.setOrder(mockOrder);
    expect(store.order).toEqual(mockOrder);
    store.clear();
    expect(store.order).toBeNull();
  });
});
