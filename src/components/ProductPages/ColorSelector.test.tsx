import { render, screen, fireEvent } from '@testing-library/react';
import ColorSelector from './ColorSelector';

describe('ColorSelector', () => {
  const mockColors = ['Red', 'Blue', 'Green'];
  const mockOnColorChange = jest.fn();

  it('renders all color options', () => {
    render(
      <ColorSelector
        colors={mockColors}
        activeColor="Red"
        onColorChange={mockOnColorChange}
      />
    );

    mockColors.forEach((color) => {
      expect(screen.getByRole('button', { name: color })).toBeInTheDocument();
    });
  });

  it('changes highlighted active color from Red to Green on click', () => {
    const { rerender } = render(
      <ColorSelector
        colors={mockColors}
        activeColor="Red"
        onColorChange={mockOnColorChange}
      />
    );

    const redButton = screen.getByRole('button', { name: 'Red' });
    const greenButton = screen.getByRole('button', { name: 'Green' });

    expect(redButton).toHaveClass('bg-black text-white border-2 border-black');
    expect(greenButton).not.toHaveClass(
      'bg-black text-white border-2 border-black'
    );

    fireEvent.click(greenButton);
    expect(mockOnColorChange).toHaveBeenCalledWith('Green');

    rerender(
      <ColorSelector
        colors={mockColors}
        activeColor="Green"
        onColorChange={mockOnColorChange}
      />
    );

    expect(greenButton).toHaveClass(
      'bg-black text-white border-2 border-black'
    );
    expect(redButton).not.toHaveClass(
      'bg-black text-white border-2 border-black'
    );
  });
});
