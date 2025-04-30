export interface Category {
  title: string;
  shoebrands: string[];
  shoestyles: string[];
}

export interface Shoe {
  picture_url: string;
  name: string;
  brand: string;
  sizes: string[];
  colors: string[];
  colorImages: { [color: string]: string[] };
  description: string;
  prices: { [color: string]: number };
}

export interface CartItem {
  shoe: Shoe;
  selectedSize: string;
  selectedColor: string;
  selectedPrice: number;
  quantity: number;
}

export type OrderData = {
  items: CartItem[];
  subTotal: number;
  shipping: number;
  taxes: number;
  grandTotal: number;
  estimatedTimeOfArrival: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
  payment: {
    type: string;
  };
  dateOfPurchase: string;
};
