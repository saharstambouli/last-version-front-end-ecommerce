import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAVORITES, REMOVE_FAVORITES } from '../Reducers/favoritesSlice';
import { ADD_CART, REMOVE_CART } from '../Reducers/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  // Favorites state and logic
  const favorites = useSelector(state => state.favorites_store.favorites);
  const isFavorite = favorites.some(fav => fav._id === product._id); // Update to use _id

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(REMOVE_FAVORITES(product._id)); // Update to use _id
    } else {
      dispatch(ADD_FAVORITES(product));
    }
  };

  // Cart state and logic
  const cartItems = useSelector(state => state.Cart_store.cart);
  const isAddedToCart = cartItems.some(cart => cart._id === product._id); // Update to use _id

  const toggleCart = () => {
    if (isAddedToCart) {
      dispatch(REMOVE_CART(product._id)); // Update to use _id
    } else {
      dispatch(ADD_CART(product));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative group hover:shadow-lg transition-shadow duration-300">
      {/* Image and Link to Product Details */}
      <Link to={`/product/${product._id}`} className="block relative"> {/* Update to use _id */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      </Link>

      {/* Buttons */}
      <div className="flex items-center justify-center space-x-5 p-2">
        <button
          className="flex items-center justify-center bg-black text-white text-sm font-bold px-2 py-1 rounded hover:bg-gray-800 transition duration-300"
          onClick={toggleCart}
        >
          <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
          {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
        <button
          className="flex items-center justify-center  text-white text-sm font-bold px-2 py-1 rounded hover:bg-red-700 transition duration-300" style={{ backgroundColor: "#B88E2F" }}
          onClick={toggleFavorite}
        >
          <FontAwesomeIcon icon={faHeart} className="mr-1" />
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <Link to={`/Product/${product._id}`} className="block text-decoration-none text-black"> {/* Update to use _id */}
          <h2 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition duration-300">{product.name}</h2>
        </Link>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-800">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
