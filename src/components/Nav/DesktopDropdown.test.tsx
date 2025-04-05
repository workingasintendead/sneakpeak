import { render, screen } from '@testing-library/react';
import DesktopDropdown from './DesktopDropdown';
import '@testing-library/jest-dom';

describe('DesktopDropdown', () => {
  const mockCategory = {
    brands: ['Nike', 'Reebok'],
    styles: ['Basketball', 'Streetwear'],
  };

  const categoryKey = 'men';

  test('renders brands section when there are brands', () => {
    render(
      <DesktopDropdown categoryKey={categoryKey} category={mockCategory} />
    );

    expect(screen.getByText('Brands')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
  });

  test('renders styles section when there are styles', () => {
    render(
      <DesktopDropdown categoryKey={categoryKey} category={mockCategory} />
    );

    expect(screen.getByText('Styles')).toBeInTheDocument();
    expect(screen.getByText('Basketball')).toBeInTheDocument();
    expect(screen.getByText('Streetwear')).toBeInTheDocument();
  });

  test('correctly generates the URLs for brands and styles', () => {
    render(
      <DesktopDropdown categoryKey={categoryKey} category={mockCategory} />
    );

    expect(screen.getByText('Nike').closest('a')).toHaveAttribute(
      'href',
      '/men/brands/nike'
    );
    expect(screen.getByText('Reebok').closest('a')).toHaveAttribute(
      'href',
      '/men/brands/reebok'
    );

    expect(screen.getByText('Basketball').closest('a')).toHaveAttribute(
      'href',
      '/men/styles/basketball'
    );
    expect(screen.getByText('Streetwear').closest('a')).toHaveAttribute(
      'href',
      '/men/styles/streetwear'
    );
  });

  test('does not render the Brands section when there are no brands', () => {
    const emptyCategory = { brands: [], styles: ['Basketball', 'Streetwear'] };
    render(
      <DesktopDropdown categoryKey={categoryKey} category={emptyCategory} />
    );

    expect(screen.queryByText('Brands')).not.toBeInTheDocument();
  });

  test('does not render the Styles section when there are no styles', () => {
    const emptyCategory = { brands: ['Nike'], styles: [] };
    render(
      <DesktopDropdown categoryKey={categoryKey} category={emptyCategory} />
    );

    expect(screen.queryByText('Styles')).not.toBeInTheDocument();
  });
});
