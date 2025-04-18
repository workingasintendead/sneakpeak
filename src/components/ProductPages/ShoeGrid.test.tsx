import { render, screen } from '@testing-library/react';
import ShoeGrid from './ShoeGrid';
import { Shoe } from '../../types';
import { mockData } from '../../data/MockData';

describe('ShoeGrid', () => {
  const mockShoes: Shoe[] = mockData.men.slice(0, 2);

  it('renders all shoes', () => {
    render(<ShoeGrid shoes={mockShoes} />);

    expect(screen.getByText('UltraBoost 21')).toBeInTheDocument();
    expect(screen.getByText('Air Max 97')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
  });
});
