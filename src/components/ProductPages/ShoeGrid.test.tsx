import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShoeGrid from './ShoeGrid';
import { Shoe } from '../../types';
import { act } from 'react';

jest.useFakeTimers();

const mockShoes: Shoe[] = [
  {
    picture_url: '/default-UltraBoost-21.jpg',
    name: 'UltraBoost 21',
    brand: 'Adidas',
    sizes: ['7', '8', '9', '10'],
    colors: ['White', 'Blue'],
    colorImages: {
      White: 'white-image-url',
      Blue: 'blue-image-url',
    },
    prices: {
      White: 100,
      Blue: 110,
    },
    description:
      'The Adidas UltraBoost 21 offers superior comfort and energy return with every step.',
  },
  {
    picture_url: '/default-Air-Max-97.jpg',
    name: 'Air Max 97',
    brand: 'Nike',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Red', 'Black', 'White'],
    colorImages: {
      Red: 'red-image-url',
      Black: 'black-image-url',
      White: 'white-image-url',
    },
    prices: {
      Red: 150,
      Black: 140,
      White: 130,
    },
    description:
      'The Nike Air Max 97 is a classic sneaker with air cushioning and a sleek design.',
  },
];

describe('ShoeGrid', () => {
  it('renders all shoes', () => {
    render(<ShoeGrid shoes={mockShoes} />);
    expect(screen.getByText('UltraBoost 21')).toBeInTheDocument();
    expect(screen.getByText('Air Max 97')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.queryByText('Underarmor')).not.toBeInTheDocument();
  });

  it('shows confirmation message when a shoe is added to the cart', () => {
    render(<ShoeGrid shoes={[mockShoes[0]]} />);

    expect(
      screen.queryByText(
        'Added White UltraBoost 21 in size 8 for $100 to the cart!'
      )
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(
      screen.getByText(
        'Added White UltraBoost 21 in size 8 for $100 to the cart!'
      )
    ).toBeInTheDocument();
  });

  it('hides confirmation message after 3 seconds', async () => {
    render(<ShoeGrid shoes={[mockShoes[0]]} />);

    fireEvent.click(screen.getByRole('button', { name: '8' }));
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(
      screen.getByText(
        'Added White UltraBoost 21 in size 8 for $100 to the cart!'
      )
    ).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(
        screen.queryByText(
          'Added White UltraBoost 21 in size 8 for $100 to the cart!'
        )
      ).not.toBeInTheDocument();
    });
  });
});
