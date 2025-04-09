import { render, screen } from '@testing-library/react';
import DesktopCategory from './DesktopCategory';
import '@testing-library/jest-dom';

jest.mock('./DesktopDropdown', () => ({
  __esModule: true,
  default: () => <div>DesktopDropdown Mock</div>,
}));

describe('DesktopCategory', () => {
  const mockCategory = {
    title: 'Men',
    shoebrands: ['Nike', 'Reebok'],
    shoestyles: ['Basketball', 'Streetwear'],
  };

  test('renders the category name correctly', () => {
    render(<DesktopCategory categoryKey="Men" category={mockCategory} />);

    expect(screen.getByText('Men')).toBeInTheDocument();
  });

  test('renders the category link with correct href', () => {
    render(<DesktopCategory categoryKey="Men" category={mockCategory} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/men');
  });

  test('renders DesktopDropdown when category is passed', () => {
    render(<DesktopCategory categoryKey="Men" category={mockCategory} />);

    expect(screen.getByText('DesktopDropdown Mock')).toBeInTheDocument();
  });

  test('does not render DesktopDropdown when category is undefined', () => {
    render(<DesktopCategory categoryKey="Men" category={undefined} />);

    expect(screen.queryByText('DesktopDropdown Mock')).not.toBeInTheDocument();
  });
});
