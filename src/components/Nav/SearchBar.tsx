const SearchBar: React.FC = () => (
  <div className="relative">
    <input
      type="text"
      className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-full w-48"
      placeholder="Search"
    />
    <span
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      style={{ top: '59%' }}
    >
      <i className="material-icons">search</i>
    </span>
  </div>
);

export default SearchBar;
