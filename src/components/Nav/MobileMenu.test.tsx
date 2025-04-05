import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from './MobileMenu';
import { edgeConfigStore } from '../../stores/edge-config-store';
import '@testing-library/jest-dom';

jest.mock('../../stores/edge-config-store', () => ({
  edgeConfigStore: {
    configData: {
      categories: {
        men: {
          title: 'Men',
          brands: ['Nike', 'Adidas'],
          styles: ['Sport', 'Crosstraining'],
        },
        women: {
          title: 'Women',
          brands: ['Puma', 'Reebok'],
          styles: ['Elegant', 'Designer'],
        },
        kids: {
          title: 'Kids',
          brands: ['New Balance', 'Converse'],
          styles: ['Play', 'Casual'],
        },
      },
    },
    uniqueBrands: [
      'Nike',
      'Adidas',
      'Puma',
      'Reebok',
      'New Balance',
      'Converse',
    ],
  },
}));

describe('MobileMenu', () => {
  const closeMock = jest.fn();

  it('renders the menu when configData is available', () => {
    render(<MobileMenu isOpen={true} close={closeMock} />);

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Sport')).toBeInTheDocument();
    expect(screen.getByText('Crosstraining')).toBeInTheDocument();

    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Elegant')).toBeInTheDocument();
    expect(screen.getByText('Designer')).toBeInTheDocument();

    expect(screen.getByText('Kids')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Casual')).toBeInTheDocument();

    expect(screen.getByText('Brands')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Puma')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
    expect(screen.getByText('New Balance')).toBeInTheDocument();
    expect(screen.getByText('Converse')).toBeInTheDocument();
  });

  it('applies the correct classes based on the isOpen prop', () => {
    const { rerender } = render(<MobileMenu isOpen={true} close={closeMock} />);
    expect(screen.getByRole('dialog')).toHaveClass('translate-x-0');

    rerender(<MobileMenu isOpen={false} close={closeMock} />);

    expect(screen.getByRole('dialog')).toHaveClass('translate-x-full');
  });

  it('calls the close function when the close button is clicked', () => {
    render(<MobileMenu isOpen={true} close={closeMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it('does not render categories or brands when configData is missing', () => {
    edgeConfigStore.configData = { categories: {} };
    edgeConfigStore.uniqueBrands = new Set<string>();

    render(<MobileMenu isOpen={true} close={closeMock} />);

    expect(screen.queryByText('Men')).not.toBeInTheDocument();
    expect(screen.queryByText('Nike')).not.toBeInTheDocument();
  });
});
