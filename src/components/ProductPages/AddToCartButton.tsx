interface AddToCartButtonProps {
  onAddToCart: () => void;
  disabled: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onAddToCart,
  disabled,
}) => {
  return (
    <div className="mt-2">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full disabled:opacity-50"
        onClick={onAddToCart}
        disabled={disabled}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
