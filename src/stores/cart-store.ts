import { makeAutoObservable } from 'mobx';
import { Shoe, CartItem } from '../types/index';

class CartStore {
  cart: CartItem[];

  constructor() {
    this.cart = [];
    makeAutoObservable(this);
  }

  addItem(shoe: Shoe, selectedColor: string, selectedSize: string) {
    const selectedPrice = shoe.prices[selectedColor];
    this.cart.push({ shoe, selectedColor, selectedSize, selectedPrice });
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  get totalItems(): number {
    return this.cart.length;
  }

  get cartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.selectedPrice, 0);
  }
}

export const cartStore = new CartStore();
