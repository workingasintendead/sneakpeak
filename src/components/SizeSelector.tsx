interface SizeSelectorProps {
  sizes: string[];
  activeSize: string | null;
  onSizeChange: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  activeSize,
  onSizeChange,
}) => {
  return (
    <div>
      <p className="text-black font-semibold mt-2">Available Sizes:</p>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              size === activeSize
                ? 'bg-black text-white border-2 border-black'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 border-2 border-transparent'
            }`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
