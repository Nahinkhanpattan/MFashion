import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Button, Modal, Form } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaHeart, FaExchangeAlt, FaSearch, FaShoppingCart, FaBars, FaAngleDown } from 'react-icons/fa';

const Shop = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  const [sortOption, setSortOption] = useState('Low To High');

  // Simulate preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Add sorting logic here if needed
  };

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Search Modal */}
      <Modal show={showSearch} onHide={() => setShowSearch(false)} centered className="bg-black bg-opacity-75">
        <Modal.Body className="flex items-center justify-center">
          <Button variant="dark" className="absolute top-8 right-8 text-white text-2xl" onClick={() => setShowSearch(false)}>
            +
          </Button>
          <Form className="w-full max-w-md">
            <Form.Control
              type="text"
              placeholder="Search here....."
              className="w-full text-3xl border-b-2 border-gray-700 bg-transparent text-gray-400 p-2 focus:outline-none"
            />
          </Form>
        </Modal.Body>
      </Modal>

      {/* Offcanvas Menu */}
      <div className="lg:hidden">
        <Button variant="outline-dark" className="fixed top-6 right-4 z-50" onClick={() => { /* Implement offcanvas toggle */ }}>
          <FaBars size={22} />
        </Button>
        <div className="fixed top-0 left-[-300px] w-[300px] h-full bg-white p-6 z-50 transition-transform">
          <div className="text-center mb-6">
            <div className="inline-block mr-6">
              <a href="#" className="text-black uppercase text-sm font-semibold">Sign in</a>
              <a href="#" className="text-black uppercase text-sm font-semibold ml-4">FAQs</a>
            </div>
            <div className="inline-block relative group">
              <span className="text-black uppercase text-sm font-semibold cursor-pointer">
                Usd <FaAngleDown className="inline" />
              </span>
              <ul className="absolute left-0 top-6 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <li className="px-4 py-1 text-black text-sm cursor-pointer">USD</li>
                <li className="px-4 py-1 text-black text-sm cursor-pointer">EUR</li>
                <li className="px-4 py-1 text-black text-sm cursor-pointer">USD</li>
              </ul>
            </div>
          </div>
          <div className="text-center mb-6">
            <a href="#" className="inline-block mr-6"><FaSearch size={16} /></a>
            <a href="#" className="inline-block mr-6"><FaHeart size={16} /></a>
            <a href="#" className="inline-block relative">
              <FaShoppingCart size={16} />
              <span className="absolute -top-2 -right-2 text-xs text-black">{cartItems}</span>
            </a>
            <div className="inline-block text-black font-bold ml-2">$0.00</div>
          </div>
          <p className="text-black text-center">Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white">
        <div className="bg-black text-white py-2 hidden lg:block">
          <Container>
            <Row>
              <Col lg={6} md={7}>
                <p className="mb-0">Free shipping, 30-day return or refund guarantee.</p>
              </Col>
              <Col lg={6} md={5} className="text-right">
                <div className="inline-block mr-6">
                  <a href="#" className="text-white uppercase text-sm font-semibold mr-6">Sign in</a>
                  <a href="#" className="text-white uppercase text-sm font-semibold">FAQs</a>
                </div>
                <div className="inline-block relative group">
                  <span className="text-white uppercase text-sm font-semibold cursor-pointer">
                    Usd <FaAngleDown className="inline" />
                  </span>
                  <ul className="absolute left-0 top-6 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li className="px-4 py-1 text-black text-sm cursor-pointer">USD</li>
                    <li className="px-4 py-1 text-black text-sm cursor-pointer">EUR</li>
                    <li className="px-4 py-1 text-black text-sm cursor-pointer">USD</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="py-4 items-center">
            <Col lg={3} md={3}>
              <a href="./index.html"><img src="/img/logo.png" alt="Logo" className="max-w-full" /></a>
            </Col>
            <Col lg={6} md={6} className="text-center">
              <nav className="hidden lg:block">
                <ul className="flex justify-center space-x-10">
                  <li><a href="./index.html" className="text-black font-semibold text-lg relative hover:after:scale-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:transform after:scale-x-0 after:transition-transform">Home</a></li>
                  <li><a href="./shop.html" className="text-black font-semibold text-lg relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:transform after:scale-x-100">Shop</a></li>
                  <li className="relative group">
                    <a href="#" className="text-black font-semibold text-lg relative hover:after:scale-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:transform after:scale-x-0 after:transition-transform">Pages</a>
                    <ul className="absolute left-0 top-8 bg-black text-white p-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all z-10">
                      <li><a href="./about.html" className="block px-5 py-1 text-sm">About Us</a></li>
                      <li><a href="./shop-details.html" className="block px-5 py-1 text-sm">Shop Details</a></li>
                      <li><a href="./shopping-cart.html" className="block px-5 py-1 text-sm">Shopping Cart</a></li>
                      <li><a href="./checkout.html" className="block px-5 py-1 text-sm">Check Out</a></li>
                      <li><a href="./blog-details.html" className="block px-5 py-1 text-sm">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="./blog.html" className="text-black font-semibold text-lg relative hover:after:scale-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:transform after:scale-x-0 after:transition-transform">Blog</a></li>
                  <li><a href="./contact.html" className="text-black font-semibold text-lg relative hover:after:scale-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:transform after:scale-x-0 after:transition-transform">Contacts</a></li>
                </ul>
              </nav>
            </Col>
            <Col lg={3} md={3} className="text-right hidden lg:block">
              <div className="flex justify-end items-center">
                <a href="#" className="mr-6" onClick={() => setShowSearch(true)}><FaSearch size={16} /></a>
                <a href="#" className="mr-6"><FaHeart size={16} /></a>
                <a href="#" className="relative mr-6">
                  <FaShoppingCart size={16} />
                  <span className="absolute -top-2 -right-2 text-xs text-black">{cartItems}</span>
                </a>
                <div className="text-black font-bold">$0.00</div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Breadcrumb */}
      <section className="py-8 bg-gray-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Shop</h4>
                <div className="flex justify-center">
                  <a href="./index.html" className="text-black text-sm mr-4 relative after:content-['\f105'] after:font-[FontAwesome] after:absolute after:-right-3 after:top-0">Home</a>
                  <span className="text-gray-500 text-sm">Shop</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <Container>
          <Row>
            {/* Sidebar */}
            <Col lg={3}>
              <div className="pr-5">
                {/* Search */}
                <div className="mb-12">
                  <Form className="relative">
                    <Form.Control
                      type="text"
                      placeholder="Search..."
                      className="w-full text-sm text-gray-500 pl-5 border border-gray-300 h-10 focus:outline-none placeholder-gray-500"
                    />
                    <Button
                      variant="link"
                      className="absolute right-0 top-0 h-full text-gray-500 px-4"
                      type="submit"
                    >
                      <FaSearch />
                    </Button>
                  </Form>
                </div>

                {/* Accordion */}
                <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5']}>
                  {/* Categories */}
                  <Accordion.Item eventKey="0" className="border-0 mb-6">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Categories
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-2 pb-5 border-b border-gray-300">
                      <ul className="max-h-[225px] overflow-auto">
                        {['Men (20)', 'Women (20)', 'Bags (20)', 'Clothing (20)', 'Shoes (20)', 'Accessories (20)', 'Kids (20)', 'Kids (20)', 'Kids (20)'].map((item, index) => (
                          <li key={index}>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 block leading-8">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Branding */}
                  <Accordion.Item eventKey="1" className="border-0 mb-6">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Branding
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-2 pb-5 border-b border-gray-300">
                      <ul>
                        {['Louis Vuitton', 'Chanel', 'Hermes', 'Gucci'].map((item, index) => (
                          <li key={index}>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 block leading-8">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Filter Price */}
                  <Accordion.Item eventKey="2" className="border-0 mb-6">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Filter Price
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-2 pb-5 border-b border-gray-300">
                      <ul>
                        {['$0.00 - $50.00', '$50.00 - $100.00', '$100.00 - $150.00', '$150.00 - $200.00', '$200.00 - $250.00', '250.00+'].map((item, index) => (
                          <li key={index}>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 block leading-8">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Size */}
                  <Accordion.Item eventKey="3" className="border-0 mb-6">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Size
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-4 pb-5 border-b border-gray-300">
                      <div className="flex flex-wrap">
                        {['xs', 's', 'm', 'xl', '2xl', 'xxl', '3xl', '4xl'].map((size, index) => (
                          <label
                            key={index}
                            className="text-sm font-bold uppercase text-gray-900 border border-gray-300 px-6 py-1 mb-2 mr-1 cursor-pointer hover:bg-gray-900 hover:text-white hover:border-gray-900"
                          >
                            {size}
                            <input type="radio" name="size" className="hidden" />
                          </label>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Colors */}
                  <Accordion.Item eventKey="4" className="border-0 mb-6">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Colors
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-4 pb-5 border-b border-gray-300">
                      <div className="flex flex-wrap">
                        {[
                          '#0b090c', '#20315f', '#f1af4d', '#636068', '#57594d', '#e8bac4', '#d6c1d7', '#ed1c24', '#ffffff'
                        ].map((color, index) => (
                          <label
                            key={index}
                            className="h-7 w-7 rounded-full border border-gray-300 mr-2 mb-2 cursor-pointer relative"
                            style={{ backgroundColor: color }}
                          >
                            <input type="radio" name="color" className="hidden" />
                            <span className="absolute -top-0.5 -left-0.5 h-9 w-9 border border-gray-300 rounded-full"></span>
                          </label>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Tags */}
                  <Accordion.Item eventKey="5" className="border-0">
                    <Accordion.Header className="text-base font-bold uppercase text-gray-900 relative after:content-['\f107'] after:font-[FontAwesome] after:text-xl after:text-gray-900 after:absolute after:right-0 after:top-2">
                      Tags
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-4 pb-0">
                      <div className="flex flex-wrap">
                        {['Product', 'Bags', 'Shoes', 'Fashio', 'Clothing', 'Hats', 'Accessories'].map((tag, index) => (
                          <a
                            key={index}
                            href="#"
                            className="text-xs font-bold uppercase text-gray-700 bg-gray-100 px-4 py-1 mb-2 mr-1.5 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>

            {/* Products */}
            <Col lg={9}>
              {/* Product Options */}
              <div className="mb-12">
                <Row>
                  <Col lg={6} md={6} sm={6}>
                    <p className="text-gray-900 mb-0">Showing 1–12 of 126 results</p>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="text-right">
                    <div className="flex items-center justify-end">
                      <p className="text-gray-900 mr-2 mb-0">Sort by Price:</p>
                      <Form.Select
                        value={sortOption}
                        onChange={handleSortChange}
                        className="border-none text-gray-900 text-sm font-bold h-auto p-0 pr-8 bg-transparent relative after:content-[''] after:border-b-2 after:border-r-2 after:border-gray-900 after:h-2 after:w-2 after:absolute after:right-3 after:top-1.5 after:-rotate-45"
                      >
                        <option value="Low To High">Low To High</option>
                        <option value="$0 - $55">$0 - $55</option>
                        <option value="$55 - $100">$55 - $100</option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Product Grid */}
              <Row>
                {[
                  { img: 'product-2.jpg', title: 'Piqué Biker Jacket', price: '$67.24', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-3.jpg', title: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4, label: 'Sale', colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-4.jpg', title: 'Diagonal Textured Cap', price: '$60.9', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-6.jpg', title: 'Ankle Boots', price: '$98.49', rating: 4, label: 'Sale', colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-7.jpg', title: 'T-shirt Contrast Pocket', price: '$49.66', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-8.jpg', title: 'Basic Flowing Scarf', price: '$26.28', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-9.jpg', title: 'Piqué Biker Jacket', price: '$67.24', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-10.jpg', title: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4, label: 'Sale', colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-11.jpg', title: 'Diagonal Textured Cap', price: '$60.9', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-12.jpg', title: 'Ankle Boots', price: '$98.49', rating: 4, label: 'Sale', colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-13.jpg', title: 'T-shirt Contrast Pocket', price: '$49.66', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                  { img: 'product-14.jpg', title: 'Basic Flowing Scarf', price: '$26.28', rating: 0, colors: ['#5e64d1', '#404a47', '#d5a667'] },
                ].map((product, index) => (
                  <Col lg={4} md={6} sm={6} key={index}>
                    <div className={`relative ${product.label === 'Sale' ? 'sale' : ''}`}>
                      <div
                        className="h-64 bg-cover bg-center relative group"
                        style={{ backgroundImage: `url(/img/product/${product.img})` }}
                      >
                        {product.label && (
                          <span className="absolute top-5 left-0 bg-white text-black text-xs font-bold uppercase px-4 py-1">
                            {product.label}
                          </span>
                        )}
                        <ul className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <li className="mb-2"><a href="#"><FaHeart className="bg-white p-2" size={24} /></a></li>
                          <li className="mb-2 relative">
                            <a href="#"><FaExchangeAlt className="bg-white p-2" size={24} /></a>
                            <span className="absolute left-[-78px] top-1 bg-black text-white text-xs px-2 py-1 opacity-0 hover:opacity-100 transition-opacity">Compare</span>
                          </li>
                          <li><a href="#"><FaSearch className="bg-white p-2" size={24} /></a></li>
                        </ul>
                      </div>
                      <div className="pt-6">
                        <h6 className="text-black font-semibold mb-2">{product.title}</h6>
                        <a href="#" className="text-red-500 font-bold uppercase text-sm">+ Add To Cart</a>
                        <div className="flex mb-2">
                          {Array(5).fill().map((_, i) => (
                            <FaStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
                          ))}
                        </div>
                        <h5 className="text-black font-bold">{product.price}</h5>
                        <div className="flex mt-2">
                          {product.colors.map((color, i) => (
                            <label
                              key={i}
                              className={`h-3 w-3 rounded-full mr-1 cursor-pointer ${i === 1 ? 'ring-2 ring-black' : ''}`}
                              style={{ backgroundColor: color }}
                            >
                              <input type="radio" name={`color-${index}`} className="hidden" />
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Pagination */}
              <div className="pt-6 text-center">
                {['1', '2', '3', '...', '21'].map((page, index) => (
                  page === '...' ? (
                    <span key={index} className="inline-block text-base font-bold text-gray-900 px-2.5">...</span>
                  ) : (
                    <a
                      key={index}
                      href="#"
                      className={`inline-block text-base font-bold text-gray-900 h-7 w-7 border border-transparent rounded-full text-center leading-7 hover:border-gray-900 ${page === '1' ? 'border-gray-900' : ''}`}
                    >
                      {page}
                    </a>
                  )
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;