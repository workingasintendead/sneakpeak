import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutContactForm from './CheckoutContactForm';

describe('CheckoutContactForm', () => {
  const mockHandleChange = jest.fn();
  const mockContact = {
    name: 'Jane Hoe',
    email: 'jane@example.com',
    phone: '666-867-5309',
  };
  it('renders all input fields with correct values', () => {
    render(
      <CheckoutContactForm form={mockContact} handleChange={mockHandleChange} />
    );

    expect(screen.getByPlaceholderText('Name')).toHaveValue(mockContact.name);
    expect(screen.getByPlaceholderText('Email')).toHaveValue(mockContact.email);
    expect(screen.getByPlaceholderText('Phone Number')).toHaveValue(
      mockContact.phone
    );
  });

  it('calls handleChange when inputs change', () => {
    render(
      <CheckoutContactForm form={mockContact} handleChange={mockHandleChange} />
    );
    const nameInput = screen.getByPlaceholderText('Name');

    fireEvent.change(nameInput, { target: { value: 'Joe Blow' } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
});
