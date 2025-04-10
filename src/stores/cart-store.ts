import { autorun, makeAutoObservable } from 'mobx';
import { Shoe } from '../types/index';

interface CartItem {
  shoe: Shoe;
  selectedSize: string;
  selectedColor: string;
}

class CartStore {
  cart: CartItem[];

  constructor() {
    this.cart = [];
    makeAutoObservable(this);
    autorun(() => {
      console.log('Cart updated:', this.cart);
    });
  }

  addItem(shoe: Shoe, selectedColor: string, selectedSize: string) {
    this.cart.push({ shoe, selectedColor, selectedSize });
    console.log('Added to cart:', {
      name: shoe.name,
      color: selectedColor,
      size: selectedSize,
    });
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  get totalItems(): number {
    return this.cart.length;
  }

  clearCart() {
    this.cart = [];
  }
}

export const cartStore = new CartStore();
