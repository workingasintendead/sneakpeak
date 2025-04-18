interface CartDrawerContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CartDrawerContainer: React.FC<CartDrawerContainerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        data-testid="cart-overlay"
      />

      <div
        data-testid="cart-drawer"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-full max-w-[35rem] bg-gray-800 z-50 shadow-lg transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default CartDrawerContainer;
