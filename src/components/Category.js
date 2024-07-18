import React, { useState } from 'react';

const Category = ({ category }) => {
  const [showPlaceholders, setShowPlaceholders] = useState(false);

  const handleCategoryClick = () => {
    setShowPlaceholders(!showPlaceholders);
  };

  return (
    <div className='category'>
      <button className='category-button' onClick={handleCategoryClick}>
        {category}
      </button>
      {showPlaceholders && (
        <div className='placeholders'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='placeholder-item'>
              {`${category} Item ${index + 1}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;

