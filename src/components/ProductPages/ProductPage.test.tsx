import { render, screen, waitFor } from '@testing-library/react';
import ProductPage from './ProductPage';
import { mockData } from '../../data/MockData';

jest.mock('../Nav/Navbar', () => {
  const MockNavbar = () => <div data-testid="mock-navbar" />;
  MockNavbar.displayName = 'MockNavbar';
  return MockNavbar;
});

describe('ProductPage', () => {
  const category = 'men';

  it('renders the correct header based on category prop', () => {
    render(<ProductPage category={category} />);
    expect(screen.getByRole('heading', { name: 'Men' })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Women' })
    ).not.toBeInTheDocument();
  });

  it('displays loading spinner initially', () => {
    render(<ProductPage category={category} />);
    expect(screen.getByLabelText(/loading spinner/i)).toBeInTheDocument();
  });

  it('renders ShoeGrid with correct number of ShoeCards after loading', async () => {
    render(<ProductPage category={category} />);
    const expectedShoes = mockData[category];

    await waitFor(() => {
      expectedShoes.forEach((shoe) => {
        expect(screen.getByText(shoe.name)).toBeInTheDocument();
      });
    });
  });
});
