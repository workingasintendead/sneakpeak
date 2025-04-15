interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        className="w-7 h-7 bg-black rounded text-white text-sm hover:bg-gray-900 transition flex items-center justify-center hover:cursor-pointer
"
        onClick={onDecrease}
      >
        -
      </button>
      <span aria-label="quantity">{quantity}</span>
      <button
        className="w-7 h-7 bg-black rounded text-white text-sm hover:bg-gray-900 transition flex items-center justify-center hover:cursor-pointer
"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
