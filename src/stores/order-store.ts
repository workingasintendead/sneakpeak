import { makeAutoObservable } from 'mobx';
import { OrderData } from '../types';

export class OrderStore {
  order: OrderData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(order: OrderData) {
    this.order = order;
  }

  clear() {
    this.order = null;
  }
}

export const orderStore = new OrderStore();
