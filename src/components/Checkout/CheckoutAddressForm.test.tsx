import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutAddressForm from './CheckoutAddressForm';

describe('CheckoutAddressForm', () => {
  const mockHandleChange = jest.fn();
  const mockAddress = {
    line1: '123 Main St',
    line2: 'Apt 16',
    city: 'San Diego',
    state: 'CA',
    postal_code: '90210',
    country: 'USA',
  };

  it('renders all input fields with correct values', () => {
    render(
      <CheckoutAddressForm
        address={mockAddress}
        handleChange={mockHandleChange}
      />
    );
    expect(screen.getByPlaceholderText('Street Address')).toHaveValue(
      mockAddress.line1
    );
    expect(
      screen.getByPlaceholderText('Apt / Suite / Unit (optional)')
    ).toHaveValue(mockAddress.line2);
    expect(screen.getByPlaceholderText('City')).toHaveValue(mockAddress.city);
    expect(screen.getByPlaceholderText('State')).toHaveValue(mockAddress.state);
    expect(screen.getByPlaceholderText('ZIP Code')).toHaveValue(
      mockAddress.postal_code
    );
    expect(screen.getByPlaceholderText('Country')).toHaveValue(
      mockAddress.country
    );
  });

  it('renders line2 as empty string when line2 is undefined', () => {
    const mockAddress = {
      line1: '123 Main St',
      line2: undefined,
      city: 'San Diego',
      state: 'CA',
      postal_code: '90210',
      country: 'USA',
    };

    render(
      <CheckoutAddressForm
        address={mockAddress}
        handleChange={mockHandleChange}
      />
    );

    expect(
      screen.getByPlaceholderText('Apt / Suite / Unit (optional)')
    ).toHaveValue('');
  });

  it('calls handleChange with correct event when city input changes', async () => {
    render(
      <CheckoutAddressForm
        address={mockAddress}
        handleChange={mockHandleChange}
      />
    );
    const cityInput = screen.getByPlaceholderText('City');

    await userEvent.type(cityInput, 'Los Angeles');

    expect(mockHandleChange).toHaveBeenCalledTimes('Los Angeles'.length);
  });
});
