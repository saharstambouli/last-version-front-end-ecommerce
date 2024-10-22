import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'; 


const Favorits = () => {
  const favorites = useSelector((state) => state.favorites_store.favorites);
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px', marginBottom: '30px' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6">WISHLIST</h1>
        </div>
      </div>

      {/* Display favorite products */}
      <div className="p-4">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} /> // Render ProductCard for each favorite
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">You have no favorite products yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorits;