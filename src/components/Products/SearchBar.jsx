/* eslint-disable */
import { useState } from 'react';

const SearchBar = ({ categories, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = [];
    categories.forEach((category) => {
      const matchingProducts = category.products.filter((product) =>
        product.productName.toLowerCase().includes(term)
      );
      filtered.push(...matchingProducts);
    });
    setFilteredProducts(filtered);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      className="p-2 border border-gray-300 rounded-lg w-full"
      placeholder="Search for products..."
    />
  );
};

export default SearchBar;
