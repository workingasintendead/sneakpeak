import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import { mockCartItem } from './__mocks__/mockCartItem';

describe('CartItem', () => {
  beforeEach(() => {
    render(<CartItem item={mockCartItem} />);
  });

  describe('renders text content', () => {
    it('shows the correct shoe name', () => {
      expect(screen.getByText("UltraBoost 21 Women's")).toBeInTheDocument();
    });

    it('shows the brand', () => {
      expect(screen.getByText('Adidas')).toBeInTheDocument();
    });

    it('shows the size and color', () => {
      expect(screen.getByText('Size: 9 · Color: Pink')).toBeInTheDocument();
    });

    it('shows the selected price', () => {
      expect(screen.getByText('$180.00')).toBeInTheDocument();
    });
  });

  describe('renders image correctly', () => {
    it('displays the shoe image with correct src and alt text', () => {
      const img = screen.getByAltText(
        "UltraBoost 21 Women's"
      ) as HTMLImageElement;

      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toContain('ultraboost-pink.jpg');
    });
  });
});
