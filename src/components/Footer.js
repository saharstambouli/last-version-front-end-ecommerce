const Footer = () => {
    return (
      <footer className="text-black py-8 bg-gray-100 mt-9">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center md:text-left">
          {/* First Column */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Fourniro</h2>
          </div>
  
          {/* Second Column */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Links</h2>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Third Column */}
          <div>
            <h2 className="font-semibold text-xl mb-4">Support</h2>
            <ul>
              <li><a href="/payment-options" className="hover:text-gray-400">Payment Options</a></li>
              <li><a href="/return" className="hover:text-gray-400">Return Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Fourniro. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  