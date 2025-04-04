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
      'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
    name: "Air Max 97 Women's",
    brand: 'Nike',
    sizes: ['5', '6', '7', '8', '9'],
    colors: ['Pink', 'Black', 'White'],
    description:
      "The Nike Air Max 97 Women's is a stylish sneaker with air cushioning for all-day comfort.",
    colorImages: {
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Pink: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Grey: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Beige:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Red: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      White:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Orange:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Grey: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
      Blue: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
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
      Black:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9405.jpg?auto=webp&quality=75&width=980&dpr=2',
      Yellow:
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9393.jpg?auto=webp&quality=75&width=980&dpr=2',
    },
    prices: {
      Black: 110,
      Yellow: 115,
    },
  },
];
