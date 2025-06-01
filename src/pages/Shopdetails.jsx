import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Tab, Button, Modal } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaPlay, FaHeart, FaExchangeAlt, FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Shopdetails = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Simulate preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle quantity change
  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
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
          <form className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search here....."
              className="w-full text-3xl border-b-2 border-gray-700 bg-transparent text-gray-400 p-2 focus:outline-none"
            />
          </form>
        </Modal.Body>
      </Modal>

      {/* Offcanvas Menu */}
      <div className="lg:hidden">
        <Button variant="outline-dark" className="fixed top-6 right-4 z-50" onClick={() => { /* Implement offcanvas toggle */ }}>
          <FaBars size={22} />
        </Button>
        {/* Offcanvas content (simplified) */}
        <div className="fixed top-0 left-[-300px] w-[300px] h-full bg-white p-6 z-50 transition-transform">
          <div className="text-center mb-6">
            <div className="inline-block mr-6">
              <a href="#" className="text-black uppercase text-sm font-semibold">Sign in</a>
              <a href="#" className="text-black uppercase text-sm font-semibold ml-4">FAQs</a>
            </div>
            <div className="inline-block relative group">
              <span className="text-black uppercase text-sm font-semibold cursor-pointer">
                Usd <i className="arrow_carrot-down"></i>
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
                    Usd <i className="arrow_carrot-down"></i>
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

      {/* Shop Details Section */}
      <section className="py-16 bg-gray-100">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8">
            <a href="./index.html" className="text-black text-sm mr-4 relative after:content-['\f105'] after:font-[FontAwesome] after:absolute after:-right-3 after:top-0">Home</a>
            <a href="./shop.html" className="text-black text-sm mr-4 relative after:content-['\f105'] after:font-[FontAwesome] after:absolute after:-right-3 after:top-0">Shop</a>
            <span className="text-gray-500 text-sm">Product Details</span>
          </div>

          {/* Product Images and Tabs */}
          <Row>
            <Col lg={3} md={3}>
              <Nav variant="tabs" className="flex-col w-[105px]">
                {['thumb-1.png', 'thumb-2.png', 'thumb-3.png', 'thumb-4.png'].map((thumb, index) => (
                  <Nav.Item key={index} className="mb-2">
                    <Nav.Link eventKey={`tabs-${index + 1}`} className="p-0">
                      <div
                        className="h-[120px] w-[95px] bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(/img/shop-details/${thumb})` }}
                      >
                        {index === 3 && <FaPlay className="h-14 w-14 border-4 border-white rounded-full text-white" />}
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={6} md={9}>
              <Tab.Content>
                {['product-big-2.png', 'product-big-3.png', 'product-big.png', 'product-big-4.png'].map((img, index) => (
                  <Tab.Pane eventKey={`tabs-${index + 1}`} key={index}>
                    <div className="relative">
                      <img src={`/img/shop-details/${img}`} alt="Product" className="max-w-full" />
                      {index === 3 && (
                        <a
                          href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                          <FaPlay className="h-14 w-14 border-4 border-white rounded-full text-white" />
                        </a>
                      )}
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Container>

        {/* Product Details */}
        <Container className="mt-8">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h4 className="text-2xl font-bold mb-2">Hooded thermal anorak</h4>
              <div className="flex justify-center items-center mb-4">
                <FaStar className="text-yellow-500 text-sm -mr-1" />
                <FaStar className="text-yellow-500 text-sm -mr-1" />
                <FaStar className="text-yellow-500 text-sm -mr-1" />
                <FaStar className="text-yellow-500 text-sm -mr-1" />
                <FaStarHalfAlt className="text-yellow-500 text-sm" />
                <span className="ml-2 text-gray-600"> - 5 Reviews</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                $270.00 <span className="text-gray-500 text-base line-through ml-2">$70.00</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs,
                adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket.
              </p>

              {/* Size and Color Options */}
              <div className="mb-6 flex flex-wrap justify-center">
                <div className="mr-12 mb-4">
                  <span className="text-black font-bold mr-2">Size:</span>
                  {['xxl', 'xl', 'l', 's'].map((size, index) => (
                    <label
                      key={size}
                      className={`inline-block border border-gray-300 px-4 py-1 text-sm font-bold uppercase cursor-pointer mr-1 ${size === 'xl' ? 'bg-black text-white' : ''}`}
                    >
                      {size}
                      <input type="radio" name="size" defaultChecked={size === 'xl'} className="hidden" />
                    </label>
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="text-black font-bold mr-2">Color:</span>
                  {['#0b090c', '#20315f', '#f1af4d', '#ed1c24', '#ffffff'].map((color, index) => (
                    <label
                      key={index}
                      className="h-7 w-7 rounded-full border border-gray-300 mr-2 cursor-pointer relative"
                      style={{ backgroundColor: color }}
                    >
                      <input type="radio" name="color" className="hidden" />
                      <span className="absolute -top-0.5 -left-0.5 h-9 w-9 border border-gray-300 rounded-full"></span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cart Options */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center mr-4">
                  <div className="border border-gray-300 h-10 w-24 flex items-center justify-between">
                    <input type="text" value={quantity} readOnly className="w-16 text-center font-bold text-black border-none" />
                    <div className="flex flex-col">
                      <button onClick={() => handleQuantityChange(1)} className="text-black font-semibold text-lg">+</button>
                      <button onClick={() => handleQuantityChange(-1)} className="text-black font-semibold text-lg">-</button>
                    </div>
                  </div>
                </div>
                <Button variant="dark" className="uppercase font-bold tracking-widest px-8">Add to Cart</Button>
              </div>

              {/* Additional Options */}
              <div className="mb-8">
                <a href="#" className="text-gray-600 uppercase text-sm font-bold mr-4">
                  <FaHeart className="inline mr-1" /> Add to Wishlist
                </a>
                <a href="#" className="text-gray-600 uppercase text-sm font-bold">
                  <FaExchangeAlt className="inline mr-1" /> Add to Compare
                </a>
              </div>

              {/* Guaranteed Safe Checkout */}
              <div className="relative mb-8">
                <h5 className="text-xl font-bold text-center">
                  <span className="bg-white px-8">Guaranteed Safe Checkout</span>
                </h5>
                <div className="absolute top-2.5 left-0 right-0 h-px bg-gray-300 -z-10"></div>
                <img src="/img/shop-details/details-payment.png" alt="Payment Methods" className="my-4 mx-auto" />
                <ul className="text-center">
                  <li className="text-sm font-bold text-black">
                    SKU: <span className="font-normal text-gray-500">3812912</span>
                  </li>
                  <li className="text-sm font-bold text-black">
                    Categories: <span className="font-normal text-gray-500">Clothes</span>
                  </li>
                  <li className="text-sm font-bold text-black">
                    Tag: <span className="font-normal text-gray-500">Clothes, Skin, Body</span>
                  </li>
                </ul>
              </div>

              {/* Tabs for Description, Reviews, Additional Info */}
              <Tab.Container defaultActiveKey="description">
                <Nav variant="tabs" className="justify-content-center border-b border-gray-300">
                  <Nav.Item>
                    <Nav.Link eventKey="description" className="text-lg font-bold text-gray-500 hover:text-black px-0 mx-8 pb-2 border-b-2 border-transparent hover:border-red-500">
                      Description
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="reviews" className="text-lg font-bold text-gray-500 hover:text-black px-0 mx-8 pb-2 border-b-2 border-transparent hover:border-red-500">
                      Customer Previews(5)
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="additional" className="text-lg font-bold text-gray-500 hover:text-black px-0 mx-8 pb-2 border-b-2 border-transparent hover:border-red-500">
                      Additional Information
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="pt-8">
                  <Tab.Pane eventKey="description">
                    <p className="text-lg font-bold text-black mb-6">
                      Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.
                    </p>
                    <div className="mb-6">
                      <h5 className="text-xl font-bold mb-3">Products Information</h5>
                      <p className="text-gray-600">
                        A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.
                      </p>
                      <p className="text-gray-600">
                        As is the case with any new technology product, the cost of a Pocket PC was substantial during it's early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-3">Material used</h5>
                      <p className="text-gray-600">
                        Polyester is deemed lower quality due to its none natural quality's. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="reviews">
                    <div className="mb-6">
                      <h5 className="text-xl font-bold mb-3">Products Information</h5>
                      <p className="text-gray-600">
                        A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.
                      </p>
                      <p className="text-gray-600">
                        As is the case with any new technology product, the cost of a Pocket PC was substantial during it's early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-3">Material used</h5>
                      <p className="text-gray-600">
                        Polyester is deemed lower quality due to its

 none natural quality's. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="additional">
                    <p className="text-lg font-bold text-black mb-6">
                      Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.
                    </p>
                    <div className="mb-6">
                      <h5 className="text-xl font-bold mb-3">Products Information</h5>
                      <p className="text-gray-600">
                        A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.
                      </p>
                      <p className="text-gray-600">
                        As is the case with any new technology product, the cost of a Pocket PC was substantial during it's early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-3">Material used</h5>
                      <p className="text-gray-600">
                        Polyester is deemed lower quality due to its none natural quality's. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.
                      </p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Related Products Section */}
      <section className="py-16">
        <Container>
          <h3 className="text-2xl font-bold text-center mb-8">Related Product</h3>
          <Row>
            {[
              { img: 'product-1.jpg', title: 'Piqué Biker Jacket', price: '$67.24', rating: 0, label: 'New' },
              { img: 'product-2.jpg', title: 'Piqué Biker Jacket', price: '$67.24', rating: 0 },
              { img: 'product-3.jpg', title: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4, label: 'Sale' },
              { img: 'product-4.jpg', title: 'Diagonal Textured Cap', price: '$60.9', rating: 0 },
            ].map((product, index) => (
              <Col lg={3} md={6} sm={6} key={index}>
                <div className={`product__item ${product.label === 'Sale' ? 'sale' : ''}`}>
                  <div
                    className="h-64 bg-cover bg-center relative"
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
                        <FaStar key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-500'} />
                      ))}
                    </div>
                    <h5 className="text-black font-bold">{product.price}</h5>
                    <div className="flex mt-2">
                      {['#5e64d1', '#404a47', '#d5a667'].map((color, i) => (
                        <label key={i} className={`h-3 w-3 rounded-full mr-1 cursor-pointer ${i === 1 ? 'ring-2 ring-black' : ''}`} style={{ backgroundColor: color }}>
                          <input type="radio" name={`color-${index}`} className="hidden" />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6}>
              <div className="mb-8">
                <a href="#"><img src="/img/footer-logo.png" alt="Footer Logo" className="mb-4" /></a>
                <p className="text-gray-500">The customer is at the heart of our unique business model, which includes design.</p>
                <a href="#"><img src="/img/payment.png" alt="Payment Methods" /></a>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6} className="lg:offset-1">
              <div className="mb-8">
                <h6 className="text-white uppercase font-bold text-sm mb-4">Shopping</h6>
                <ul className="list-none">
                  {['Clothing Store', 'Trending Shoes', 'Accessories', 'Sale'].map((item) => (
                    <li key={item}><a href="#" className="text-gray-500 text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="mb-8">
                <h6 className="text-white uppercase font-bold text-sm mb-4">Shopping</h6>
                <ul className="list-none">
                  {['Contact Us', 'Payment Methods', 'Delivery', 'Return & Exchanges'].map((item) => (
                    <li key={item}><a href="#" className="text-gray-500 text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className="lg:offset-1">
              <div className="mb-8">
                <h6 className="text-white uppercase font-bold text-sm mb-4">Newsletter</h6>
                <p className="text-gray-500 mb-4">Be the first to know about new arrivals, look books, sales & promos!</p>
                <form>
                  <input type="text" placeholder="Your email" className="w-full bg-transparent border-b-2 border-white text-gray-600 p-2" />
                  <Button variant="link" className="absolute right-0 top-0 text-gray-500">
                    <span className="icon_mail_alt"></span>
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <div className="border-t border-gray-800 pt-4">
                <p className="text-gray-500">
                  Copyright © {new Date().getFullYear()} All rights reserved | This template is made with <FaHeart className="inline text-red-500" /> by <a href="https://colorlib.com" target="_blank" className="text-red-500">Colorlib</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Shopdetails;