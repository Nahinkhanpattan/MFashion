import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart, FaAngleDown, FaBars, FaTimes, FaUser, FaSignOutAlt, FaCog, FaShoppingBag } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout, isAdmin } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/mock-login');
  };

  const renderUserMenu = () => {
    if (!isAuthenticated) {
      return (
        <Link to="/mock-login" className="text-white uppercase text-sm font-semibold mr-6 hover:text-gray-300 no-underline">
          Sign in
        </Link>
      );
    }

    return (
      <div className="inline-block relative group">
        <span className="text-white uppercase text-sm font-semibold cursor-pointer mr-6 hover:text-gray-300">
          <FaUser className="inline-block mr-1" /> {user.name} <FaAngleDown className="inline" />
        </span>
        <ul className="absolute left-0 top-6 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-50">
          {isAdmin() && (
            <li>
              <Link to="/dashboard" className="px-4 py-2 text-black text-sm hover:bg-gray-100 flex items-center">
                <FaCog className="mr-2" /> Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/profile" className="px-4 py-2 text-black text-sm hover:bg-gray-100 flex items-center">
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/orders" className="px-4 py-2 text-black text-sm hover:bg-gray-100 flex items-center">
              <FaShoppingBag className="mr-2" /> Orders
            </Link>
          </li>
          <li>
            <Link to="/settings" className="px-4 py-2 text-black text-sm hover:bg-gray-100 flex items-center">
              <FaCog className="mr-2" /> Settings
            </Link>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="w-full text-left px-4 py-2 text-red-600 text-sm hover:bg-gray-100 flex items-center"
            >
              <FaSignOutAlt className="mr-2" /> Sign out
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          a {
            text-decoration: none !important;
          }
          .nav-link {
            text-decoration: none !important;
          }
          .nav-link:hover {
            text-decoration: none !important;
          }
        `}
      </style>
      
      <header className="bg-white relative">
        <div className="bg-black text-white py-2 hidden lg:block">
          <Container>
            <Row>
              <Col lg={6} md={7}>
                <p className="mb-0">Free shipping, 30-day return or refund guarantee.</p>
              </Col>
              <Col lg={6} md={5} className="text-right">
                <div className="inline-block mr-6">
                  {renderUserMenu()}
                  <Link to="/faqs" className="text-white uppercase text-sm font-semibold hover:text-gray-300 no-underline">
                    FAQs
                  </Link>
                </div>
                <div className="inline-block relative group">
                  <span className="text-white uppercase text-sm font-semibold cursor-pointer">
                    USD <FaAngleDown className="inline" />
                  </span>
                  <ul className="absolute left-0 top-6 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[100px] z-50">
                    <li className="px-4 py-2 text-black text-sm hover:bg-gray-100 cursor-pointer">USD</li>
                    <li className="px-4 py-2 text-black text-sm hover:bg-gray-100 cursor-pointer">EUR</li>
                    <li className="px-4 py-2 text-black text-sm hover:bg-gray-100 cursor-pointer">GBP</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="py-4 items-center">
            <Col lg={3} md={3} className="flex items-center">
              <button className="lg:hidden mr-4 text-black" onClick={() => setShowMobileMenu(true)}>
                <FaBars size={24} />
              </button>
              <Link to="/" className="no-underline">
                <img src="/img/logo.png" alt="Logo" className="max-w-full" />
              </Link>
            </Col>
            <Col lg={6} md={6} className="text-center">
              <nav className="hidden lg:block">
                <ul className="flex justify-center space-x-10">
                  <li>
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => `
                        text-black font-semibold text-lg relative group
                        ${isActive ? 'text-red-500' : ''}
                      `}
                      style={{ textDecoration: 'none' }}
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/shop" 
                      className={({ isActive }) => `
                        text-black font-semibold text-lg relative group
                        ${isActive ? 'text-red-500' : ''}
                      `}
                      style={{ textDecoration: 'none' }}
                    >
                      Shop
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </NavLink>
                  </li>
                  <li 
                    className="relative group"
                    onMouseEnter={() => setShowPagesDropdown(true)}
                    onMouseLeave={() => setShowPagesDropdown(false)}
                  >
                    <span 
                      className="text-black font-semibold text-lg cursor-pointer flex items-center relative group"
                      style={{ textDecoration: 'none' }}
                    >
                      Pages <FaAngleDown className="ml-1" />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                    <ul 
                      className={`absolute left-0 top-full bg-white shadow-lg transition-all duration-300 min-w-[200px] z-50 py-2 ${
                        showPagesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <li>
                        <NavLink 
                          to="/about" 
                          className={({ isActive }) => `
                            block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors
                            ${isActive ? 'bg-gray-100 text-black' : ''}
                          `}
                          style={{ textDecoration: 'none' }}
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/shop-details" 
                          className={({ isActive }) => `
                            block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors
                            ${isActive ? 'bg-gray-100 text-black' : ''}
                          `}
                          style={{ textDecoration: 'none' }}
                        >
                          Shop Details
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/cart" 
                          className={({ isActive }) => `
                            block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors
                            ${isActive ? 'bg-gray-100 text-black' : ''}
                          `}
                          style={{ textDecoration: 'none' }}
                        >
                          Shopping Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/checkout" 
                          className={({ isActive }) => `
                            block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors
                            ${isActive ? 'bg-gray-100 text-black' : ''}
                          `}
                          style={{ textDecoration: 'none' }}
                        >
                          Check Out
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/blog-details" 
                          className={({ isActive }) => `
                            block px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-colors
                            ${isActive ? 'bg-gray-100 text-black' : ''}
                          `}
                          style={{ textDecoration: 'none' }}
                        >
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink 
                      to="/blog" 
                      className={({ isActive }) => `
                        text-black font-semibold text-lg relative group
                        ${isActive ? 'text-red-500' : ''}
                      `}
                      style={{ textDecoration: 'none' }}
                    >
                      Blog
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => `
                        text-black font-semibold text-lg relative group
                        ${isActive ? 'text-red-500' : ''}
                      `}
                      style={{ textDecoration: 'none' }}
                    >
                      Contacts
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={3} md={3} className="text-right hidden lg:block">
              <div className="flex justify-end items-center space-x-8">
                <div className="p-2 hover:text-gray-600">
                  <button onClick={() => setShowSearch(true)} className="flex items-center justify-center w-6 h-6">
                    <FaSearch size={20} />
                  </button>
                </div>
                <div className="p-2 hover:text-gray-600">
                  <Link to="/wishlist" className="flex items-center justify-center w-6 h-6">
                    <FaHeart size={20} />
                  </Link>
                </div>
                <div className="p-2 hover:text-gray-600">
                  <Link to="/cart" className="flex items-center justify-center w-6 h-6 relative">
                    <FaShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {cartItems}
                    </span>
                  </Link>
                </div>
                <div className="text-black font-bold pl-2">$0.00</div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setShowMobileMenu(false)}
        >
          <div 
            className={`fixed top-0 right-0 w-[280px] h-full bg-white transform transition-transform duration-300 ${
              showMobileMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setShowMobileMenu(false)} className="text-black">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-4">
              {isAuthenticated && (
                <div className="mb-4 border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">My Account</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/profile" className="flex items-center text-gray-600 hover:text-black">
                        <FaUser className="mr-2" /> Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders" className="flex items-center text-gray-600 hover:text-black">
                        <FaShoppingBag className="mr-2" /> Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" className="flex items-center text-gray-600 hover:text-black">
                        <FaCog className="mr-2" /> Settings
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="flex items-center text-red-600 hover:text-red-700 w-full">
                        <FaSignOutAlt className="mr-2" /> Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <ul className="space-y-4">
                <li><Link to="/" className="block text-lg hover:text-gray-600">Home</Link></li>
                <li><Link to="/shop" className="block text-lg hover:text-gray-600">Shop</Link></li>
                <li className="space-y-2">
                  <span className="block text-lg mb-2">Pages</span>
                  <ul className="pl-4 space-y-2">
                    <li><Link to="/about" className="block text-gray-600 hover:text-black">About Us</Link></li>
                    <li><Link to="/shop-details" className="block text-gray-600 hover:text-black">Shop Details</Link></li>
                    <li><Link to="/shopping-cart" className="block text-gray-600 hover:text-black">Shopping Cart</Link></li>
                    <li><Link to="/checkout" className="block text-gray-600 hover:text-black">Check Out</Link></li>
                    <li><Link to="/blog-details" className="block text-gray-600 hover:text-black">Blog Details</Link></li>
                  </ul>
                </li>
                <li><Link to="/blog" className="block text-lg hover:text-gray-600">Blog</Link></li>
                <li><Link to="/contact" className="block text-lg hover:text-gray-600">Contacts</Link></li>
                {!isAuthenticated && (
                  <li><Link to="/mock-login" className="block text-lg text-red-600 hover:text-red-700">Sign in</Link></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 