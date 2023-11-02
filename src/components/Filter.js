// Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div>
      <label>Filter by Category:</label>
      <select onChange={onCategoryChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>

      </select>
    </div>
  );
}

export default Filter;
