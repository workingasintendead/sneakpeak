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

  it('computes cartTotal correctly', () => {
    expect(store.cartTotal).toBe(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'Blue', '9', 'increase');

    const expectedTotal = 170 * 2 + 180;
    expect(store.cartTotal).toBe(expectedTotal);
  });

  it('clears totalItems correctly', () => {
    expect(store.totalItems).toBe(0);

    store.updateQuantity(mockShoe, 'White', '10', 'increase');
    store.updateQuantity(mockShoe, 'White', '10', 'increase');

    expect(store.totalItems).toBe(2);
    expect(store.cartTotal).toBe(340);
    expect(store.getCartItems()).toHaveLength(1);
    expect(store.getCartItems()[0].quantity).toBe(2);

    store.clearCart();

    expect(store.totalItems).toBe(0);
    expect(store.cartTotal).toBe(0);
    expect(store.getCartItems()).toHaveLength(0);
  });
});
