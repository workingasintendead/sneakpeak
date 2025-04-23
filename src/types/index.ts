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
