type AddressFormProps = {
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckoutAddressForm: React.FC<AddressFormProps> = ({
  address,
  handleChange,
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Delivery</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="line1"
        type="text"
        placeholder="Street Address"
        required
        value={address.line1}
        onChange={handleChange}
        className="w-full border p-2 rounded col-span-2"
      />
      <input
        name="line2"
        type="text"
        placeholder="Apt / Suite / Unit (optional)"
        value={address.line2 ?? ''}
        onChange={handleChange}
        className="w-full border p-2 rounded col-span-2"
      />
      <input
        name="city"
        type="text"
        placeholder="City"
        required
        value={address.city}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="state"
        type="text"
        placeholder="State"
        required
        value={address.state}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="postal_code"
        type="text"
        placeholder="ZIP Code"
        required
        value={address.postal_code}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="country"
        type="text"
        placeholder="Country"
        required
        value={address.country}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  </div>
);

export default CheckoutAddressForm;
