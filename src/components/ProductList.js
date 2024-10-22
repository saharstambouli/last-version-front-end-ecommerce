import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import ProductCard from './ProductCard';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold the fetched products
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/Product/upload'); 
        setProducts(response.data); // Store the fetched products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  // Limit to 8 products
  const limitedProducts = products.slice(0, 8);

  // Function to handle button click to navigate to the shop page
  const handleShowMore = () => {
    navigate('/Shop'); // Navigate to the shop page
  };

  return (
    <div>
      <h1 className='text-center font-bold pb-4 text-4xl'>Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="button-container">
        <button className='Show' onClick={handleShowMore}>Show More</button>
      </div>
    </div>
  );
};

export default ProductList;
