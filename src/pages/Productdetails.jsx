import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_FAVORITES } from '../Reducers/favoritesSlice';
import { ADD_CART } from '../Reducers/cartSlice';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { productId } = useParams();  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/Product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(ADD_CART({ ...product, quantity }));
  };

  const handleAddToFavorites = () => {
    dispatch(ADD_FAVORITES(product));
  };


  const handleBuyNow = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/Product/delete', {
        data: { productId: product._id, quantity: parseInt(quantity) }  // Use 'data' property for body
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error purchasing product:', error);
      alert('Error purchasing product. Please try again.');
    }
  };


  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-w-sm object-cover rounded-lg shadow-md"
              style={{ maxHeight: '400px' }}
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 pt-3 mt-3" style={{marginTop:'15px'}}>{product.name}</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>

              <div className="flex items-center mb-6">
                <label className="mr-4 text-lg font-medium text-gray-700">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 p-2 rounded w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                  min="1"
                />
              </div>

              <p className="text-2xl font-semibold mb-6 text-gray-900">
                Total Price: ${(parseFloat(product.price) * quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center bg-blue-500 text-black px-6 py-3 rounded-lg hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
              >
                <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                Add to Cart
              </button>

              <button
                onClick={handleAddToFavorites}
                className="flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
              >
                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                Add to Favorites
              </button>

              <button
                onClick={handleBuyNow}
                className="flex items-center bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
              >
                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
