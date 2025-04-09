interface PriceSectionProps {
  activePrice: number;
}

const PriceSection: React.FC<PriceSectionProps> = ({ activePrice }) => {
  return (
    <div className="mt-2">
      <p className="text-black text-xl font-semibold">Price: ${activePrice}</p>
    </div>
  );
};

export default PriceSection;
