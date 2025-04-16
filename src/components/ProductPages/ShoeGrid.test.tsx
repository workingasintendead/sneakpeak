import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShoeGrid from './ShoeGrid';
import { Shoe } from '../../types';
import { act } from 'react';
import { mockData } from '../../data/MockData';

jest.useFakeTimers();

describe('ShoeGrid', () => {
  const mockShoes: Shoe[] = mockData.men.slice(0, 2);

  it('renders all shoes', () => {
    render(<ShoeGrid shoes={mockShoes} />);

    expect(screen.getByText('UltraBoost 21')).toBeInTheDocument();
    expect(screen.getByText('Air Max 97')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
  });

  it('shows confirmation message when a shoe is added to the cart', () => {
    render(<ShoeGrid shoes={[mockShoes[0]]} />);

    expect(
      screen.queryByText('Added Red Air Max 97 in size 7 for $150 to the cart!')
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(
      screen.getByText('Added Red Air Max 97 in size 7 for $150 to the cart!')
    ).toBeInTheDocument();
  });

  it('hides confirmation message after 3 seconds', async () => {
    render(<ShoeGrid shoes={[mockShoes[0]]} />);

    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(
      screen.getByText('Added Red Air Max 97 in size 7 for $150 to the cart!')
    ).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(
        screen.queryByText(
          'Added Red Air Max 97 in size 7 for $150 to the cart!'
        )
      ).not.toBeInTheDocument();
    });
  });
});
