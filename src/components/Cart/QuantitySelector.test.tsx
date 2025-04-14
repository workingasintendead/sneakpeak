import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
import { mockCartItem } from './__mocks__/mockCartItem';

describe('QuantitySelector', () => {
  it('renders the correct quantity', () => {
    render(
      <QuantitySelector
        quantity={mockCartItem.quantity}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
      />
    );
    expect(
      screen.getByText(mockCartItem.quantity.toString())
    ).toBeInTheDocument();
  });

  it('calls onIncrease when the + button is clicked', () => {
    const handleIncrease = jest.fn();
    render(
      <QuantitySelector
        quantity={mockCartItem.quantity}
        onIncrease={handleIncrease}
        onDecrease={jest.fn()}
      />
    );

    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);

    expect(handleIncrease).toHaveBeenCalled();
  });

  it('calls onDecrease when the - button is clicked', () => {
    const handleDecrease = jest.fn();
    render(
      <QuantitySelector
        quantity={mockCartItem.quantity}
        onIncrease={jest.fn()}
        onDecrease={handleDecrease}
      />
    );

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(handleDecrease).toHaveBeenCalled();
  });
});
