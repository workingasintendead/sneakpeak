import { CartStore } from './cart-store';
import type { Shoe } from '../types';
import { mockData } from '../data/MockData';

const mockShoe: Shoe = mockData.men[1];

describe('CartStore', () => {
  let store: CartStore;

  beforeEach(() => {
    store = new CartStore();
  });

  it('adds a new item when increasing and item not in cart', () => {
    const items = store.getCartItems();
    expect(items).toHaveLength(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(1);
    expect(items[0].selectedColor).toBe('White');
    expect(items[0].selectedSize).toBe('10');
    expect(items[0].selectedPrice).toBe(170);
  });

  it('increases quantity if item already exists', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    const item = store.getCartItems()[0];
    expect(item.quantity).toBe(2);
  });

  it('decreases quantity if quantity > 1', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'decrease');

    const item = store.getCartItems()[0];
    expect(item.quantity).toBe(1);
  });

  it('removes item from cart if quantity is decreased to 0', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'decrease');

    expect(store.getCartItems()).toHaveLength(0);
  });

  it('computes totalItems correctly', () => {
    expect(store.totalItems).toBe(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'Blue', '9', 'increase');
    store.updateQuantity(mockShoe, 'Blue', '9', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'decrease');

    expect(store.totalItems).toBe(3);
  });

  it('computes cartSubTotal correctly', () => {
    expect(store.cartSubTotal).toBe(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'Blue', '9', 'increase');

    const expectedTotal = 170 * 2 + 180;
    expect(store.cartSubTotal).toBe(expectedTotal);
  });

  it('clears totalItems correctly', () => {
    expect(store.totalItems).toBe(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    expect(store.totalItems).toBe(2);
    expect(store.cartSubTotal).toBe(340);
    expect(store.getCartItems()).toHaveLength(1);
    expect(store.getCartItems()[0].quantity).toBe(2);

    store.clearCart();

    expect(store.totalItems).toBe(0);
    expect(store.cartSubTotal).toBe(0);
    expect(store.getCartItems()).toHaveLength(0);
  });

  it('returns $20 shipping when subtotal is greater than 0 and less than $150', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    expect(store.cartSubTotal).toBe(170);
    expect(store.shippingCost).toBe(0);
  });

  it('returns $0 shipping when subtotal is 0', () => {
    expect(store.cartSubTotal).toBe(0);
    expect(store.shippingCost).toBe(0);
  });

  it('returns $0 shipping when subtotal is >= $150', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    expect(store.cartSubTotal).toBeGreaterThanOrEqual(150);
    expect(store.shippingCost).toBe(0);
  });

  it('computes grandTotal correctly when subtotal is 0', () => {
    expect(store.cartSubTotal).toBe(0);
    expect(store.shippingCost).toBe(0);
    expect(store.taxEstimate).toBe(0);
    expect(store.grandTotal).toBe(0);
  });

  it('computes grandTotal correctly when subtotal is between $0 and $150', () => {
    const cheapShoe = {
      ...mockShoe,
      name: 'Budget Sneaker',
      prices: { White: 100 },
    };

    store.updateQuantity(cheapShoe, 'White', '10', 'increase');

    expect(store.cartSubTotal).toBe(100);
    expect(store.shippingCost).toBe(20);
    expect(store.taxEstimate).toBe(0);
    expect(store.grandTotal).toBe(120);
  });

  it('computes grandTotal correctly when subtotal is $150 or more (free shipping)', () => {
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    const subtotal = store.cartSubTotal;
    expect(subtotal).toBeGreaterThanOrEqual(150);
    expect(store.shippingCost).toBe(0);
    expect(store.taxEstimate).toBe(0);
    expect(store.grandTotal).toBe(subtotal);
  });
});
