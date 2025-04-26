import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutContactForm from './CheckoutContactForm';

describe('CheckoutContactForm', () => {
  const mockHandleChange = jest.fn();
  const mockContact = {
    name: 'Jane Doe',
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

  it('calls handleChange when inputs change', async () => {
    render(
      <CheckoutContactForm form={mockContact} handleChange={mockHandleChange} />
    );
    const nameInput = screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'Joe Blow');

    expect(mockHandleChange).toHaveBeenCalledTimes('Joe Blow'.length);
  });
});
