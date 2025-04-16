const LoadingSpinner: React.FC = () => (
  <div
    aria-label="loading spinner"
    className="flex justify-center items-center h-full"
  >
    <div className="spinner-border animate-spin border-4 rounded-full w-16 h-16 border-t-transparent"></div>
  </div>
);

export default LoadingSpinner;
