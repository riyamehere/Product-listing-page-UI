import React from 'react';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

// ProductItem component takes a product prop of type Product
const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-item">
      {/* Product image */}
      <img src={product.image} alt={product.title} className="product-image" />

      {/* Product title */}
      <h3 className="product-title">{product.title}</h3>

      {/* Product category */}
      <p className="product-category">{product.category}</p>

      {/* Product price */}
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductItem;
