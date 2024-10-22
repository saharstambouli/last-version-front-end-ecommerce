import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toppage from './components/Toppage';
import Browse from './components/Browse';
import ProductList from './components/ProductList';
import { Link, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './index.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Favorits from './pages/Favorits';
import Search from './pages/Search';
import Cart from './pages/Cart';
import HomeLogin from './pages/HomeLogin';
import Productdetails from './pages/Productdetails';


function App() {
  return (
    <div className="">
      {/* Keep Navbar always displayed */}
      <Navbar />

      <Routes>
        {/* Home route with dynamic greeting (HomeLogin) */}
        <Route path="/" element={<HomeWrapper />} />

      
        <Route path="/HomeLogin" element={<HomeLogin />} />

        {/* Other routes with only Navbar and Footer */}
        <Route path="/Shop" element={<PageWrapper component={<Shop />} />} />
        <Route path="/About" element={<PageWrapper component={<About />} />} />
        <Route path="/Contact" element={<PageWrapper component={<Contact />} />} />
        <Route path="/Login" element={<PageWrapper component={<Login />} />} />
        <Route path="/Favorits" element={<PageWrapper component={<Favorits />} />} />
        <Route path="/Search" element={<PageWrapper component={<Search />} />} />
        <Route path="/Cart" element={<PageWrapper component={<Cart />} />} />
        <Route path="/Product/:productId" element={<Productdetails />} />

      </Routes>
    </div>
  );
}
// Wrapper for Home route
const HomeWrapper = () => {
  return (
    <>
      <Toppage />
      <Browse />
      <ProductList />
      <Footer /> {/* Add Footer here for the home page */}
    </>
  );
};

// Wrapper for other pages with only Navbar and Footer
const PageWrapper = ({ component }) => {
  return (
    <>
      {component}
      <Footer />
    </>
  );
};

export default App;
