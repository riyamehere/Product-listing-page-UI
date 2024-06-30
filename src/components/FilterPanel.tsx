import React, { useState } from 'react';

interface FilterPanelProps {
  setFilters: (filters: any) => void; // Props interface defining setFilters function
}

const FilterPanel: React.FC<FilterPanelProps> = ({ setFilters }) => {
  // State variables for filters
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [brand, setBrand] = useState('');
  const [availability, setAvailability] = useState('');

  // Function to apply filters and pass them to parent component
  const handleApplyFilters = () => {
    setFilters({
      category,
      priceRange,
      brand,
      availability,
    });
  };

  return (
    <div className="filter-panel">
      {/* Categories section */}
      <h3>Categories</h3>
      <select className="category-select" onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Price Range section */}
      <h3>Price Range</h3>
      <input
        type="range"
        min="0"
        max="500"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, +e.target.value])}
      />
      <p>${priceRange[0]} - ${priceRange[1]}</p>

      {/* Availability section */}
      <h3>Availability</h3>
      <select onChange={(e) => setAvailability(e.target.value)}>
        <option value="">All</option>
        <option value="in stock">In Stock</option>
        <option value="out of stock">Out of Stock</option>
      </select>

      {/* Apply Filters button */}
      <button className="apply-filters" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
