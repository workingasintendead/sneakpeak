import { render, screen, fireEvent } from '@testing-library/react';
import DesktopCategory from './DesktopCategory';

describe('DesktopCategory', () => {
  const mockCategory = {
    title: 'Men',
    shoebrands: ['Nike', 'Reebok'],
    shoestyles: ['Basketball', 'Streetwear'],
  };

  const mockOnHover = jest.fn();

  it('renders the category name correctly', () => {
    render(
      <DesktopCategory
        categoryKey="Men"
        category={mockCategory}
        isOpen={false}
        onHover={mockOnHover}
      />
    );

    expect(screen.getByText('Men')).toBeInTheDocument();
  });

  it('renders the category link with correct href', () => {
    render(
      <DesktopCategory
        categoryKey="Men"
        category={mockCategory}
        isOpen={false}
        onHover={mockOnHover}
      />
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/men');
  });

  it('renders full dropdown content when isOpen is true', () => {
    render(
      <DesktopCategory
        categoryKey="Men"
        category={mockCategory}
        isOpen={true}
        onHover={mockOnHover}
      />
    );

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
    expect(screen.getByText('Basketball')).toBeInTheDocument();
    expect(screen.getByText('Streetwear')).toBeInTheDocument();
  });

  it('does not render dropdown if isOpen is false', () => {
    render(
      <DesktopCategory
        categoryKey="Men"
        category={mockCategory}
        isOpen={false}
        onHover={mockOnHover}
      />
    );

    expect(screen.queryByText('Nike')).not.toBeInTheDocument();
    expect(screen.queryByText('Reebok')).not.toBeInTheDocument();
    expect(screen.queryByText('Basketball')).not.toBeInTheDocument();
    expect(screen.queryByText('Streetwear')).not.toBeInTheDocument();
  });

  it('calls onHover(null) on mouse leave', () => {
    render(
      <DesktopCategory
        categoryKey="Men"
        category={mockCategory}
        isOpen={true}
        onHover={mockOnHover}
      />
    );

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
    expect(screen.getByText('Basketball')).toBeInTheDocument();
    expect(screen.getByText('Streetwear')).toBeInTheDocument();

    const categoryContainer = screen.getByText('Men').closest('div')!;
    fireEvent.mouseLeave(categoryContainer);

    expect(mockOnHover).toHaveBeenCalledWith(null);
  });
});
