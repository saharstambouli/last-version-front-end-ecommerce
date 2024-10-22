import React from 'react';

const Toppage = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center relative" 
      style={{ backgroundImage: "url('/top.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end">
        <div className="text-left text-black p-8 max-w-md mr-10" style={{ backgroundColor: '#FFF3E3' }}>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>NEW ARRIVAL</h1>
          <h2 className="text-5xl font-bold" style={{ color: '#B88E2F' }}>Discover Our New Collection</h2>
          <p className="mb-6">
            Discover our latest products with amazing discounts. Don't miss the chance to grab yours now!
          </p>
          <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#B88E2F" }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Toppage;
