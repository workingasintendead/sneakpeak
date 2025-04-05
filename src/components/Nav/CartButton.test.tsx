import { render, screen } from '@testing-library/react';
import CartButton from './CartButton';

describe('CartButton', () => {
  it('button renders', () => {
    render(<CartButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the correct cart count', () => {
    render(<CartButton />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays the correct shopping bag icon', () => {
    render(<CartButton />);
    const icon = screen.getByText(/shopping_bag/i);
    expect(icon).toBeInTheDocument();
  });
});
