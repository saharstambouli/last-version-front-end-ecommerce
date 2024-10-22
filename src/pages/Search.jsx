import React from 'react';
import { products } from '../components/products';

const Search = () => {






  
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("search.png")' ,  height: '300px'}} 
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center" >
        <h1 className="text-4xl font-bold text-white mb-6">Search</h1>
        <input
          type="text"
          placeholder="Enter your search term"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" style={{ width: '800px', height: '50px' }}
        />
      </div>
    </div>
  );
};

export default Search;
