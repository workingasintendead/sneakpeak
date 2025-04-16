import { render, screen, fireEvent } from '@testing-library/react';
import AddToCartButton from './AddToCartButton';

describe('AddToCartButton', () => {
  it('renders the button with correct text', () => {
    render(<AddToCartButton onAddToCart={jest.fn()} disabled={false} />);
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  it('calls onAddToCart when clicked', () => {
    const onAddToCartMock = jest.fn();
    render(<AddToCartButton onAddToCart={onAddToCartMock} disabled={false} />);

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(onAddToCartMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onAddToCart when disabled', () => {
    const onAddToCartMock = jest.fn();
    render(<AddToCartButton onAddToCart={onAddToCartMock} disabled={true} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(onAddToCartMock).not.toHaveBeenCalled();
  });
});
