import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
import { mockCartItem } from './__mocks__/mockCartItem';
import { useState } from 'react';

const TestQuantitySelector = () => {
  const [quantity, setQuantity] = useState(mockCartItem.quantity);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity - 1);

  return (
    <QuantitySelector
      quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

describe('QuantitySelector', () => {
  it('renders the correct quantity', () => {
    render(<TestQuantitySelector />);
    expect(
      screen.getByText(mockCartItem.quantity.toString())
    ).toBeInTheDocument();
  });

  it('calls onIncrease when the + button is clicked', () => {
    render(<TestQuantitySelector />);

    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);

    expect(
      screen.getByText((mockCartItem.quantity + 1).toString())
    ).toBeInTheDocument();
  });

  it('calls onDecrease when the - button is clicked', () => {
    render(<TestQuantitySelector />);

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(
      screen.getByText((mockCartItem.quantity - 1).toString())
    ).toBeInTheDocument();
  });
});
