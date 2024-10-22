import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'; 

const Cart = () => {
  const achats = useSelector((state) => state.Cart_store.cart); 


// Total price of products in the cart
const totalPrice = achats.reduce((acc, product) => {
  // Convert product.price to a number if it's a string
  const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
  
  // Check if price is a valid number
  return acc + (typeof price === 'number' && !isNaN(price) ? price : 0);
}, 0).toFixed(2);



  return (
    <div>
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px', marginBottom: '30px' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6">YOUR CART</h1>
        </div>
      </div>

      {/* Display cart List */}
      <div className="p-4">
        {achats.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {achats.map((product) => (
                <ProductCard key={product.id} product={product} /> 
              ))}
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold">Total Price: ${totalPrice}</h2>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center">Cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
