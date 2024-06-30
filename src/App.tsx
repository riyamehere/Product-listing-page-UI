import React, { useState } from 'react';
import ProductList from './components/ProductList.js';
import FilterPanel from './components/FilterPanel.js';
import SearchBar from './components/SearchBar.js';
import './App.css';

// Interface defining the structure of filters
interface Filters {
  category: string;
  priceRange: [number, number];
  brand: string;
  availability: string;
}

const App: React.FC = () => {
  // State variables for filters and search term
  const [filters, setFilters] = useState<Filters>({
    category: '',           // Initial category filter
    priceRange: [0, 500],   // Initial price range filter
    brand: '',              // Initial brand filter
    availability: '',       // Initial availability filter
  });
  const [searchTerm, setSearchTerm] = useState<string>(''); // State variable for search term

  return (
    <div className="app-container">
      {/* Header section */}
      <header className="header">
        <div className="header-content">
          <h1>ShopEasy</h1> {/* Application title */}
          <SearchBar setSearchTerm={setSearchTerm} /> {/* Search bar component */}
        </div>
      </header>

      {/* Main content section */}
      <div className="main-content">
        <FilterPanel setFilters={setFilters} /> {/* Filter panel component */}
        <ProductList filters={filters} searchTerm={searchTerm} /> {/* Product list component */}
      </div>
    </div>
  );
};

export default App;
