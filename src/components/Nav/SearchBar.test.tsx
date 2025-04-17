import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders the input field with the correct placeholder', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders the search icon inside the input field', () => {
    render(<SearchBar />);
    const iconElement = screen.getByText('search');
    expect(iconElement).toBeInTheDocument();
  });
});
