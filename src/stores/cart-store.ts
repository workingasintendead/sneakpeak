import { makeAutoObservable } from 'mobx';
import { Shoe, CartItem } from '../types/index';

class CartStore {
  cart: CartItem[];

  constructor() {
    this.cart = [];
    makeAutoObservable(this);
  }

  increaseQuantity(
    shoe: Shoe,
    selectedColor: string,
    selectedSize: string,
    action: 'increase' | 'add'
  ) {
    const selectedPrice = shoe.prices[selectedColor];

    const item = this.cart.find(
      (item) =>
        item.shoe.name === shoe.name &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (item) {
      item.quantity += 1;
    } else if (action === 'add') {
      this.cart.push({
        shoe,
        selectedColor,
        selectedSize,
        selectedPrice,
        quantity: 1,
      });
    }
  }

  decreaseQuantity(shoe: Shoe, selectedColor: string, selectedSize: string) {
    const index = this.cart.findIndex(
      (item) =>
        item.shoe.name === shoe.name &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  get totalItems(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  get cartTotal(): number {
    return this.cart.reduce(
      (sum, item) => sum + item.selectedPrice * item.quantity,
      0
    );
  }
}

export const cartStore = new CartStore();
