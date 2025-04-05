interface ColorSelectorProps {
  colors: string[];
  activeColor: string;
  onColorChange: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  activeColor,
  onColorChange,
}) => {
  return (
    <div>
      <p className="text-black font-semibold">Color Options:</p>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              color === activeColor
                ? 'bg-black text-white border-2 border-black'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 border-2 border-transparent'
            }`}
            onClick={() => onColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
