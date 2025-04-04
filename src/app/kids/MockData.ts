interface Shoe {
  picture_url: string;
  name: string;
  brand: string;
  sizes: string[];
  colors: string[];
  colorImages: { [color: string]: string };
  description: string;
  prices: { [color: string]: number };
}

export const shoes: Shoe[] = [
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Air Max 97 Kids',
    brand: 'Nike',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Pink', 'Blue', 'White'],
    description:
      'The Nike Air Max 97 Kids sneaker offers a stylish design with air cushioning for all-day comfort.',
    colorImages: {
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Pink: 90,
      Blue: 85,
      White: 80,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9473-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'UltraBoost 21 Kids',
    brand: 'Adidas',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Pink', 'White', 'Yellow'],
    description:
      'The Adidas UltraBoost 21 Kids shoe is designed for comfort with superior energy return, perfect for active kids.',
    colorImages: {
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Yellow:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Pink: 75,
      White: 70,
      Yellow: 65,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Yeezy Boost 350 V2 Kids',
    brand: 'Adidas',
    sizes: ['4', '5', '6', '7'],
    colors: ['Red', 'Black', 'Blue'],
    description:
      'The Yeezy Boost 350 V2 Kids sneaker combines comfort with style, offering a trendy design and ultimate comfort.',
    colorImages: {
      Red: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Red: 100,
      Black: 95,
      Blue: 110,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9473-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Classic Leather Kids',
    brand: 'Reebok',
    sizes: ['2', '3', '4', '5', '6'],
    colors: ['White', 'Pink'],
    description:
      'The Reebok Classic Leather Kids sneaker is a timeless design with comfort and style for any occasion.',
    colorImages: {
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      White: 50,
      Pink: 55,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Chuck Taylor All Star Kids',
    brand: 'Converse',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Red', 'Blue', 'White'],
    description:
      'The iconic Converse Chuck Taylor All Star Kids sneaker blends retro style with all-day comfort for young feet.',
    colorImages: {
      Red: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Red: 45,
      Blue: 40,
      White: 35,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Nike Zoom Freak 1 Kids',
    brand: 'Nike',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Orange', 'Green'],
    description:
      "The Nike Zoom Freak 1 Kids sneaker is Giannis Antetokounmpo's signature basketball shoe, now for younger athletes.",
    colorImages: {
      Orange:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Green:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Orange: 50,
      Green: 55,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Fresh Foam 1080v11 Kids',
    brand: 'New Balance',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Blue', 'Pink'],
    description:
      'The New Balance Fresh Foam 1080v11 Kids sneaker provides the ultimate in comfort and support for active kids.',
    colorImages: {
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
    },
    prices: {
      Blue: 55,
      Pink: 50,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Mamba Fury Kids',
    brand: 'Nike',
    sizes: ['3', '4', '5', '6', '7'],
    colors: ['Black', 'Yellow'],
    description:
      'The Nike Mamba Fury Kids sneaker celebrates the legacy of Kobe Bryant with a durable and stylish design.',
    colorImages: {
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Yellow:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Black: 60,
      Yellow: 65,
    },
  },
];
