type ContactFormProps = {
  form: {
    name: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckoutContactForm: React.FC<ContactFormProps> = ({
  form,
  handleChange,
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Contact</h2>
    <div className="grid grid-cols-1 gap-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  </div>
);

export default CheckoutContactForm;
