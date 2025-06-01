import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FaUser, FaSignOutAlt, FaCog, FaShoppingBag } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isOffcanvasVisible, setOffcanvasVisible] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleOffcanvas = () => {
    setOffcanvasVisible(!isOffcanvasVisible);
  };

  const handleMouseEnter = (menu) => {
    setActiveSubmenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header bg-white">
      {/* Top Bar */}
      <div className="header__top bg-[#111111] py-2.5">
        <Container>
          <Row>
            <Col lg={6} md={7}>
              <div className="header__top__left">
                <p className="text-white mb-0">Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </Col>
            <Col lg={6} md={5}>
              <div className="header__top__right text-right">
                <div className="header__top__links inline-block mr-6">
                  {!isAuthenticated ? (
                    <Link to="/login" className="text-white text-xs uppercase tracking-[2px] mr-7 inline-block">Sign in</Link>
                  ) : (
                    <Dropdown className="inline-block">
                      <Dropdown.Toggle variant="link" className="text-white text-xs uppercase tracking-[2px] mr-7 inline-block">
                        <FaUser className="inline-block mr-1" /> My Account
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="mt-2">
                        <Dropdown.Item as={Link} to="/profile">
                          <FaUser className="inline-block mr-2" /> Profile
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/orders">
                          <FaShoppingBag className="inline-block mr-2" /> Orders
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/settings">
                          <FaCog className="inline-block mr-2" /> Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout} className="text-danger">
                          <FaSignOutAlt className="inline-block mr-2" /> Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  <Link to="/faqs" className="text-white text-xs uppercase tracking-[2px] inline-block">FAQs</Link>
                </div>
                <div className="header__top__hover inline-block relative">
                  <span className="text-white text-xs uppercase tracking-[2px] inline-block cursor-pointer">
                    USD <i className="arrow_carrot-down"></i>
                  </span>
                  <ul className="bg-white inline-block p-[2px_0] absolute left-0 top-11 opacity-0 invisible z-[3] shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <li className="text-[#111111] text-xs py-0.5 px-4 cursor-pointer">USD</li>
                    <li className="text-[#111111] text-xs py-0.5 px-4 cursor-pointer">EUR</li>
                    <li className="text-[#111111] text-xs py-0.5 px-4 cursor-pointer">GBP</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Header */}
      <Container>
        <Row className="items-center">
          <Col lg={3} md={3}>
            <div className="header__logo py-[30px]">
              <Link to="/">
                <img src="img/logo.png" alt="Logo" />
              </Link>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <nav className="header__menu mobile-menu">
              <ul className="flex justify-center p-[26px_0_25px]">
                <li className="list-none inline-block mr-[45px] relative">
                  <Link to="/" className="text-[#111111] text-lg font-semibold block relative py-1">Home</Link>
                </li>
                <li className="list-none inline-block mr-[45px] relative">
                  <Link to="/shop" className="text-[#111111] text-lg font-semibold block relative py-1">Shop</Link>
                </li>
                <li 
                  className="list-none inline-block mr-[45px] relative"
                  onMouseEnter={() => handleMouseEnter('pages')}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-[#111111] text-lg font-semibold block relative py-1 cursor-pointer">
                    Pages <i className="fa fa-angle-down ml-1"></i>
                  </span>
                  <ul className={`dropdown absolute left-0 top-14 w-[150px] bg-[#111111] text-left p-[5px_0] z-[9] transition-all duration-300 ${activeSubmenu === 'pages' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <li className="block mr-0 hover:bg-[#e53637]">
                      <Link to="/about" className="text-white text-sm font-normal py-2 px-5 uppercase block hover:text-white">About Us</Link>
                    </li>
                    <li className="block mr-0 hover:bg-[#e53637]">
                      <Link to="/shop-details" className="text-white text-sm font-normal py-2 px-5 uppercase block hover:text-white">Shop Details</Link>
                    </li>
                    <li className="block mr-0 hover:bg-[#e53637]">
                      <Link to="/cart" className="text-white text-sm font-normal py-2 px-5 uppercase block hover:text-white">Shopping Cart</Link>
                    </li>
                    <li className="block mr-0 hover:bg-[#e53637]">
                      <Link to="/checkout" className="text-white text-sm font-normal py-2 px-5 uppercase block hover:text-white">Check Out</Link>
                    </li>
                    <li className="block mr-0 hover:bg-[#e53637]">
                      <Link to="/blog-details" className="text-white text-sm font-normal py-2 px-5 uppercase block hover:text-white">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="list-none inline-block mr-[45px] relative">
                  <Link to="/blog" className="text-[#111111] text-lg font-semibold block relative py-1">Blog</Link>
                </li>
                <li className="list-none inline-block relative">
                  <Link to="/contact" className="text-[#111111] text-lg font-semibold block relative py-1">Contacts</Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col lg={3} md={3}>
            <div className="header__nav__option text-right py-[30px]">
              <button className="search-switch inline-block mr-[26px]">
                <img src="img/icon/search.png" alt="Search" />
              </button>
              <Link to="/wishlist" className="inline-block mr-[26px]">
                <img src="img/icon/heart.png" alt="Wishlist" />
              </Link>
              <Link to="/cart" className="inline-block relative">
                <img src="img/icon/cart.png" alt="Cart" />
                <span className="text-[#0d0d0d] text-xs absolute left-1 top-2">0</span>
              </Link>
              <div className="price text-[#111111] text-sm font-bold inline-block ml-[-20px] relative top-1">$0.00</div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mobile Menu */}
      <div className={`offcanvas-menu-wrapper fixed left-[-300px] w-[300px] h-full bg-white p-[50px_20px_30px_30px] z-[99] overflow-y-auto transition-all duration-500 ${isOffcanvasVisible ? 'left-0 opacity-100' : ''}`}>
        <div className="offcanvas__menu">
          <ul className="flex flex-col">
            {isAuthenticated && (
              <>
                <li className="mb-4">
                  <span className="text-[#111111] text-base font-semibold">My Account</span>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link to="/profile" className="text-[#111111] text-sm block py-1"><FaUser className="inline-block mr-2" />Profile</Link></li>
                    <li><Link to="/orders" className="text-[#111111] text-sm block py-1"><FaShoppingBag className="inline-block mr-2" />Orders</Link></li>
                    <li><Link to="/settings" className="text-[#111111] text-sm block py-1"><FaCog className="inline-block mr-2" />Settings</Link></li>
                    <li><button onClick={handleLogout} className="text-[#e53637] text-sm block py-1 w-full text-left"><FaSignOutAlt className="inline-block mr-2" />Sign out</button></li>
                  </ul>
                </li>
                <li className="mb-4 border-b border-gray-200"></li>
              </>
            )}
            <li className="mb-4"><Link to="/" className="text-[#111111] text-base">Home</Link></li>
            <li className="mb-4"><Link to="/shop" className="text-[#111111] text-base">Shop</Link></li>
            <li className="mb-4">
              <span 
                className="text-[#111111] text-base flex items-center justify-between cursor-pointer"
                onClick={() => setActiveSubmenu(activeSubmenu === 'mobilePages' ? null : 'mobilePages')}
              >
                Pages <i className={`fa fa-angle-down transition-transform ${activeSubmenu === 'mobilePages' ? 'rotate-180' : ''}`}></i>
              </span>
              <ul className={`pl-4 mt-2 space-y-2 ${activeSubmenu === 'mobilePages' ? 'block' : 'hidden'}`}>
                <li><Link to="/about" className="text-[#111111] text-sm block py-1">About Us</Link></li>
                <li><Link to="/shop-details" className="text-[#111111] text-sm block py-1">Shop Details</Link></li>
                <li><Link to="/cart" className="text-[#111111] text-sm block py-1">Shopping Cart</Link></li>
                <li><Link to="/checkout" className="text-[#111111] text-sm block py-1">Check Out</Link></li>
                <li><Link to="/blog-details" className="text-[#111111] text-sm block py-1">Blog Details</Link></li>
              </ul>
            </li>
            <li className="mb-4"><Link to="/blog" className="text-[#111111] text-base">Blog</Link></li>
            <li className="mb-4"><Link to="/contact" className="text-[#111111] text-base">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`offcanvas-menu-overlay fixed inset-0 bg-black/70 z-[98] transition-all duration-500 ${isOffcanvasVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={toggleOffcanvas}
      ></div>
    </header>
  );
};

export default Header; 