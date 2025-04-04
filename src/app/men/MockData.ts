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
    name: 'Air Max 97',
    brand: 'Nike',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Red', 'Black', 'White'],
    description:
      'The Nike Air Max 97 is a classic sneaker with air cushioning and a sleek design.',
    colorImages: {
      Red: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Red: 150,
      Black: 140,
      White: 130,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9473-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'UltraBoost 21',
    brand: 'Adidas',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Blue', 'White', 'Black'],
    description:
      'The Adidas UltraBoost 21 offers superior comfort and energy return with every step.',
    colorImages: {
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
    },
    prices: {
      Blue: 180,
      White: 170,
      Black: 160,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Yeezy Boost 350 V2',
    brand: 'Adidas',
    sizes: ['8', '9', '10', '11'],
    colors: ['Grey', 'Black', 'White'],
    description:
      'The Yeezy Boost 350 V2 features a stylish design and comfortable boost cushioning.',
    colorImages: {
      Grey: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Grey: 220,
      Black: 210,
      White: 200,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9473-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Classic Leather',
    brand: 'Reebok',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['White', 'Black'],
    description:
      'The Reebok Classic Leather is a versatile sneaker that blends comfort with style.',
    colorImages: {
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      White: 90,
      Black: 100,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['Red', 'Black', 'White', 'Blue'],
    description:
      'The iconic Converse Chuck Taylor All Star has stood the test of time.',
    colorImages: {
      Red: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
    },
    prices: {
      Red: 60,
      Black: 70,
      White: 50,
      Blue: 80,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9473-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Nike Zoom Freak 1',
    brand: 'Nike',
    sizes: ['9', '10', '11', '12'],
    colors: ['Orange', 'Black'],
    description:
      "The Nike Zoom Freak 1 is Giannis Antetokounmpo's signature basketball shoe.",
    colorImages: {
      Orange:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Orange: 120,
      Black: 130,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Fresh Foam 1080v11',
    brand: 'New Balance',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Grey', 'Blue'],
    description:
      'The New Balance Fresh Foam 1080v11 provides premium comfort and support.',
    colorImages: {
      Grey: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
    },
    prices: {
      Grey: 140,
      Blue: 150,
    },
  },
  {
    picture_url:
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: 'Mamba Fury',
    brand: 'Nike',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Black', 'Yellow'],
    description:
      'The Nike Mamba Fury is a basketball shoe that celebrates the legacy of Kobe Bryant.',
    colorImages: {
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
      Yellow:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
    },
    prices: {
      Black: 110,
      Yellow: 115,
    },
  },
];
