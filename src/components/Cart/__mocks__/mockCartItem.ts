import type { CartItem } from '../../../types';

export const mockCartItem: CartItem = {
  shoe: {
    picture_url: '',
    name: "UltraBoost 21 Women's",
    brand: 'Adidas',
    sizes: ['9'],
    colors: ['Pink'],
    colorImages: {
      Pink: ['/images/ultraboost-pink.jpg'],
    },
    description: '',
    prices: {
      Pink: 180,
    },
  },
  selectedColor: 'Pink',
  selectedSize: '9',
  selectedPrice: 180,
  quantity: 2,
};
