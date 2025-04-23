import { Shoe } from '../types/index';

export const mockData: { [key: string]: Shoe[] } = {
  kids: [
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
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
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
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Yellow: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Red: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Red: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
      },
      prices: {
        Red: 45,
        Blue: 45,
        White: 50,
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
        Orange: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Green: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
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
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Yellow: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
      },
      prices: {
        Black: 60,
        Yellow: 65,
      },
    },
  ],
  men: [
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
        Red: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
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
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Grey: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
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
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
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
        Red: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9477-2.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: 'Nike Zoom Freak 1',
      brand: 'Nike',
      sizes: ['9', '10', '11', '12'],
      colors: ['Orange', 'Black'],
      description:
        "The Nike Zoom Freak 1 is Giannis Antetokounmpo's signature basketball shoe.",
      colorImages: {
        Orange: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Grey: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Yellow: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
      },
      prices: {
        Black: 110,
        Yellow: 115,
      },
    },
  ],
  women: [
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Air Max 97 Women's",
      brand: 'Nike',
      sizes: ['5', '6', '7', '8', '9'],
      colors: ['Pink', 'Black', 'White'],
      description:
        "The Nike Air Max 97 Women's is a stylish sneaker with air cushioning for all-day comfort.",
      colorImages: {
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
      },
      prices: {
        Pink: 150,
        Black: 140,
        White: 130,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "UltraBoost 21 Women's",
      brand: 'Adidas',
      sizes: ['5', '6', '7', '8', '9', '10'],
      colors: ['Pink', 'White', 'Grey'],
      description:
        "The Adidas UltraBoost 21 Women's sneaker offers superior comfort and energy return with every step.",
      colorImages: {
        Pink: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Grey: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
      },
      prices: {
        Pink: 180,
        White: 170,
        Grey: 160,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Yeezy Boost 350 V2 Women's",
      brand: 'Adidas',
      sizes: ['6', '7', '8', '9'],
      colors: ['Beige', 'Black', 'White'],
      description:
        "The Yeezy Boost 350 V2 Women's features a modern design and comfortable boost cushioning for all-day wear.",
      colorImages: {
        Beige: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
      },
      prices: {
        Beige: 220,
        Black: 210,
        White: 200,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Classic Leather Women's",
      brand: 'Reebok',
      sizes: ['5', '6', '7', '8', '9'],
      colors: ['White', 'Black'],
      description:
        "The Reebok Classic Leather Women's sneaker offers a blend of comfort, style, and durability.",
      colorImages: {
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
      },
      prices: {
        White: 90,
        Black: 100,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Chuck Taylor All Star Women's",
      brand: 'Converse',
      sizes: ['5', '6', '7', '8', '9', '10'],
      colors: ['Red', 'Black', 'White', 'Blue'],
      description:
        "The Converse Chuck Taylor All Star Women's is a timeless classic with a variety of colors.",
      colorImages: {
        Red: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        White: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
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
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Nike Zoom Freak 1 Women's",
      brand: 'Nike',
      sizes: ['7', '8', '9', '10'],
      colors: ['Orange', 'Black'],
      description:
        "The Nike Zoom Freak 1 Women's is Giannis Antetokounmpo's signature basketball shoe, designed for women.",
      colorImages: {
        Orange: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        ],
      },
      prices: {
        Orange: 120,
        Black: 130,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Fresh Foam 1080v11 Women's",
      brand: 'New Balance',
      sizes: ['5', '6', '7', '8', '9', '10'],
      colors: ['Grey', 'Blue'],
      description:
        "The New Balance Fresh Foam 1080v11 Women's offers plush cushioning and premium comfort.",
      colorImages: {
        Grey: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Blue: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
      },
      prices: {
        Grey: 140,
        Blue: 150,
      },
    },
    {
      picture_url:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      name: "Mamba Fury Women's",
      brand: 'Nike',
      sizes: ['7', '8', '9', '10'],
      colors: ['Black', 'Yellow'],
      description:
        "The Nike Mamba Fury Women's pays tribute to Kobe Bryant and is designed for performance on the court.",
      colorImages: {
        Black: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
        Yellow: [
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
          'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9358.jpg?auto=webp&quality=75&width=480&dpr=1.5',
        ],
      },
      prices: {
        Black: 110,
        Yellow: 115,
      },
    },
  ],
};
