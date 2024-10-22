import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = useState([]); // State to hold the fetched products
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/Product/upload'); // Update the endpoint as necessary
        setProducts(response.data); // Store the fetched products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Function to handle opening the filter window
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px', margin: '30px' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Shop</h1>
        </div>
      </div>
      <h1 className='text-center font-bold pb-4 text-4xl'>Our Products</h1>

      <div className="relative flex justify-end mb-4">
        {/* Filter button */}
        <div className="relative inline-block text-left">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            <span>Filter</span>
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div 
              className="absolute top-0 right-0 mt-2 w-56 h-auto max-h-96 overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20" style={{marginBottom:'1OOpx'}}
            >
              <div className="py-1">
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${selectedCategory === 'All' ? 'font-bold' : ''}`}
                  onClick={() => setSelectedCategory('All')}
                >
                  All
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${selectedCategory === 'bedroom' ? 'font-bold' : ''}`}
                  onClick={() => setSelectedCategory('bedroom')}
                >
                  Bedroom
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${selectedCategory === 'living room' ? 'font-bold' : ''}`}
                  onClick={() => setSelectedCategory('living room')}
                >
                  Living Room
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${selectedCategory === 'table' ? 'font-bold' : ''}`}
                  onClick={() => setSelectedCategory('table')}
                >
                  Table
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${selectedCategory === 'chair' ? 'font-bold' : ''}`}
                  onClick={() => setSelectedCategory('chair')}
                >
                  Chair
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-5 gap-8" style={{marginTop:'250px'}}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

     
    </div>
  );
};

export default Shop;
