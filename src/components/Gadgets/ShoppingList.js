import React, { useState } from 'react';
import Category from '../Category';
import SearchBar from './SearchBar';

const categories = [
  "fruit",
  "vegetable",
  "protein",
  "dairy",
  "grain",
  "other"
];

const ShoppingList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='shopping-list'>
      <SearchBar onSearch={handleSearch} />
      <div className='category-grid'>
        {categories
          .filter((category) =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((category) => (
            <Category key={category} category={category} />
          ))}
      </div>
    </div>
  );
};

export default ShoppingList;
