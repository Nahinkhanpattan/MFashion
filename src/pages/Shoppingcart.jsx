import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaAngleDown, FaTimes } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

const Shoppingcart = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'T-shirt Pants', image: 'cart-1.jpg', price: 98.49, quantity: 2, total: 196.98 },
    { id: '2', name: 'Diagonal Textured Cap', image: 'cart-2.jpg', price: 98.49, quantity: 1, total: 98.49 },
    { id: '3', name: 'Basic Flowing', image: 'cart-3.jpg', price: 98.49, quantity: 1, total: 98.49 },
    { id: '4', name: 'Basic Flowing', image: 'cart-4.jpg', price: 98.49, quantity: 1, total: 98.49 },
  ]);

  // Handle quantity change
  const updateQuantity = (id, newQty) => {
    if (newQty < 0) return;
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQty, total: item.price * newQty } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const total = subtotal; // Add tax/shipping if needed

  // Handle discount form
  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    // Add discount logic
  };

  return (
    <>
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
        <Button variant="outline-dark" className="fixed top-6 right-4 z-50">
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
              <span className="absolute -top-2 -right-2 text-xs text-black">{cartItems.length}</span>
            </a>
            <div className="inline-block text-black font-bold ml-2">$0.00</div>
          </div>
          <p className="text-black text-center">Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <section className="py-8 bg-gray-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2">Shopping Cart</h4>
                <div className="flex justify-center">
                  <a href="./index.html" className="text-black text-sm mr-4 relative after:content-['\f105'] after:font-[FontAwesome] after:absolute after:-right-3 after:top-0">Home</a>
                  <a href="./shop.html" className="text-black text-sm mr-4 relative after:content-['\f105'] after:font-[FontAwesome] after:absolute after:-right-3 after:top-0">Shop</a>
                  <span className="text-gray-500 text-sm">Shopping Cart</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Shopping Cart Section */}
      <section className="py-16">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="mb-8">
                <Table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-gray-900 text-base font-bold uppercase pb-6 text-left">Product</th>
                      <th className="text-gray-900 text-base font-bold uppercase pb-6 text-left">Quantity</th>
                      <th className="text-gray-900 text-base font-bold uppercase pb-6 text-left">Total</th>
                      <th className="pb-6"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="py-8 w-[400px]">
                          <div className="flex">
                            <img src={`/img/shopping-cart/${item.image}`} alt={item.name} className="w-20 h-20 mr-8" />
                            <div className="pt-5">
                              <h6 className="text-gray-900 text-sm font-semibold mb-2">{item.name}</h6>
                              <h5 className="text-black font-bold">${item.price.toFixed(2)}</h5>
                            </div>
                          </div>
                        </td>
                        <td className="py-8 w-[175px]">
                          <div className="flex items-center w-20">
                            <button
                              className="text-gray-500 text-base cursor-pointer w-5"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-12 text-center border-none text-gray-900 text-base"
                            />
                            <button
                              className="text-gray-500 text-base cursor-pointer w-5"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-8 text-gray-900 text-lg font-bold w-[140px]">${item.total.toFixed(2)}</td>
                        <td className="py-8">
                          <button
                            className="text-gray-900 text-lg bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center"
                            onClick={() => removeItem(item.id)}
                          >
                            <FaTimes />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div className="mb-4">
                    <a
                      href="#"
                      className="text-gray-900 text-sm font-bold uppercase tracking-wider border border-gray-300 px-9 py-4 inline-block"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} className="text-right">
                  <div className="mb-4">
                    <a
                      href="#"
                      className="text-white bg-gray-900 border border-gray-900 text-sm font-bold uppercase tracking-wider px-9 py-4 inline-block"
                    >
                      Update cart
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <div className="mb-16">
                <h6 className="text-gray-900 font-bold uppercase mb-9">Discount codes</h6>
                <Form className="relative" onSubmit={handleDiscountSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Coupon code"
                    className="w-full text-sm text-gray-500 h-12 border border-gray-300 pl-5 placeholder-gray-500 focus:outline-none"
                  />
                  <Button
                    type="submit"
                    className="absolute right-0 top-0 h-full bg-gray-900 text-white text-sm font-bold uppercase tracking-wider px-8 border-none"
                  >
                    Apply
                  </Button>
                </Form>
              </div>
              <div className="bg-gray-100 p-8">
                <h6 className="text-gray-900 font-bold uppercase mb-3">Cart total</h6>
                <ul className="mb-6">
                  <li className="text-gray-700 text-base leading-10 flex justify-between">
                    Subtotal <span className="text-yellow-600 font-bold">${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="text-gray-700 text-base leading-10 flex justify-between">
                    Total <span className="text-yellow-600 font-bold">${total.toFixed(2)}</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block text-white bg-gray-900 text-sm font-bold uppercase tracking-wider text-center py-3"
                >
                  Proceed to checkout
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shoppingcart;