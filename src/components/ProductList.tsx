import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem.js';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  brand?: string; // Optional property
  availability?: string; // Optional property
}

// Define the Filters interface
interface Filters {
  category: string;
  priceRange: [number, number];
  brand: string;
  availability: string;
}

// Props interface for ProductList component
interface ProductListProps {
  filters: Filters;
  searchTerm: string;
}

const ProductList: React.FC<ProductListProps> = ({ filters, searchTerm }) => {
  // State variables for products and filtered products
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      });
  }, []);

  // Effect to filter products based on filters and search term changes
  useEffect(() => {
    let filtered = products;

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }
    if (filters.availability) {
      filtered = filtered.filter(product => product.availability === filters.availability);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);
    }

    // Apply search term
    if (searchTerm) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Update filtered products state
    setFilteredProducts(filtered);
  }, [filters, searchTerm, products]); // Depend on filters, searchTerm, and products state changes

  return (
    <div className="products">
      {/* Render filtered products */}
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
