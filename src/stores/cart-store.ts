import { makeAutoObservable } from 'mobx';
import { Shoe, CartItem } from '../types/index';

export class CartStore {
  cart: CartItem[];
  drawerOpen = false;

  constructor() {
    this.cart = [];
    makeAutoObservable(this);
  }

  updateQuantity(
    shoe: Shoe,
    selectedColor: string,
    selectedSize: string,
    action: 'increase' | 'decrease'
  ) {
    const selectedPrice = shoe.prices[selectedColor];

    const cartItem = this.cart.find(
      (item) =>
        item.shoe.name === shoe.name &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (cartItem) {
      if (action === 'increase') {
        cartItem.quantity += 1;
      } else if (action === 'decrease') {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          const index = this.cart.indexOf(cartItem);
          if (index !== -1) {
            this.cart.splice(index, 1);
          }
        }
      }
    } else if (action === 'increase') {
      this.cart.push({
        shoe,
        selectedColor,
        selectedSize,
        selectedPrice,
        quantity: 1,
      });
    }
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  get totalItems(): number {
    return this.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  }

  get cartTotal(): number {
    return this.cart.reduce(
      (sum, cartItem) => sum + cartItem.selectedPrice * cartItem.quantity,
      0
    );
  }

  openDrawer() {
    this.drawerOpen = true;
  }

  closeDrawer() {
    this.drawerOpen = false;
  }

  clearCart() {
    this.cart = [];
  }
}

export const cartStore = new CartStore();
