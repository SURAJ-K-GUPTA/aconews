import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ query, setQuery }) => {
  const [input, setInput] = useState(query);

  // Debounce input updates to avoid too many requests
  const handleSearch = debounce((value) => {
    setQuery(value);
  }, 1000);

  useEffect(() => {
    handleSearch(input);
  }, [input]);

  return (
    <input
      type="text"
      placeholder="Search for news..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="p-2 border border-gray-300 rounded-lg w-full"
    />
  );
};

export default SearchBar;
