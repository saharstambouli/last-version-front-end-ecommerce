import React from 'react';

const AboutUs = () => {
  return (
    // backgroundImage 
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px', marginBottom: '30px' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        </div>
      </div>

      {/* PARAGRAPH */}
      <div className="border border-gray-300 bg-gray-50 p-6 mb-6 rounded-lg" style={{padding:'40px'}}>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Welcome to <strong>Furniture Haven</strong>, your ultimate destination for exquisite bedroom and living room furniture. Our mission is to transform your home into a sanctuary of comfort and style with our carefully curated collections.
          </p>
          <p className="mb-4">
            At Furniture Haven, we believe that every piece of furniture tells a story. Our team of skilled artisans and designers work tirelessly to create unique, high-quality pieces that blend functionality with elegance. From luxurious beds and cozy sofas to stylish coffee tables and spacious wardrobes, we have everything you need to make your home truly yours.
          </p>
          <p className="mb-4">
            We are committed to sustainability and use only the finest materials sourced responsibly. Our dedication to craftsmanship ensures that each item is built to last, providing you with timeless beauty and comfort for years to come.
          </p>
          <p className="mb-4">
            Thank you for choosing Furniture Haven. We look forward to helping you create the home of your dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
