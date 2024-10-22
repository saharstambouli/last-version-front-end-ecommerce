import React from 'react';
import Toppage from '../components/Toppage';
import Browse from '../components/Browse';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomeLogin = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
  

      {/* User greeting
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome, {user ? user.firstName : 'User'}</h1>
   
      </div> */}

      {/* Add other sections (Toppage, Browse, etc.) */}
      <>
        <Toppage />
        <Browse />
        <ProductList />
        <Footer /> {/* Footer for the home page */}
      </>
    </div>
  );
};

export default HomeLogin;
