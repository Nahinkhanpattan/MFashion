import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="footer bg-[#111111] pt-[70px]">
      <Container>
        <Row>
          {/* About Section */}
          <Col lg={3} md={6} sm={6}>
            <div className="footer__about mb-[30px]">
              <div className="footer__logo mb-[20px]">
                <Link to="/" className="text-white text-2xl font-bold">
                  MFashion
                </Link>
              </div>
              <p className="text-[#b7b7b7] text-sm leading-[26px] mb-[15px]">
                The customer is at the heart of our unique business model, which includes design.
              </p>
              <a href="#" className="text-[#b7b7b7] text-sm">
                <img src="img/payment.png" alt="Payment Methods" className="max-w-full" />
              </a>
            </div>
          </Col>

          {/* Shopping Section */}
          <Col lg={2} md={3} sm={6}>
            <div className="footer__widget mb-[30px]">
              <h6 className="text-white text-sm font-bold uppercase mb-[20px]">Shopping</h6>
              <ul>
                <li className="mb-[10px]">
                  <Link to="/shop" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Clothing Store</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/trending" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Trending Items</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/accessories" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Accessories</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/sale" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Sale</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Links Section */}
          <Col lg={2} md={3} sm={6}>
            <div className="footer__widget mb-[30px]">
              <h6 className="text-white text-sm font-bold uppercase mb-[20px]">Links</h6>
              <ul>
                <li className="mb-[10px]">
                  <Link to="/contact" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Contact Us</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/payment" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Payment Methods</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/delivery" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Delivery</Link>
                </li>
                <li className="mb-[10px]">
                  <Link to="/return" className="text-[#b7b7b7] text-sm hover:text-white transition-colors">Return & Exchanges</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Newsletter Section */}
          <Col lg={5} md={8} sm={6}>
            <div className="footer__newslatter mb-[30px]">
              <h6 className="text-white text-sm font-bold uppercase mb-[20px]">Newsletter</h6>
              <Form onSubmit={handleNewsletterSubmit}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-white text-[#b7b7b7] text-sm p-[10px] mb-[15px] w-full border-0"
                />
                <Button 
                  type="submit"
                  className="text-white text-sm font-bold uppercase tracking-[2px] bg-[#e53637] py-3 px-7 border-0 hover:bg-[#e53637]/90"
                >
                  Subscribe
                  <i className="fa fa-long-arrow-right ml-2"></i>
                </Button>
              </Form>
              <div className="footer__social mt-[30px]">
                <a href="#" className="text-[#b7b7b7] text-base mr-6 hover:text-white transition-colors">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-[#b7b7b7] text-base mr-6 hover:text-white transition-colors">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-[#b7b7b7] text-base mr-6 hover:text-white transition-colors">
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a href="#" className="text-[#b7b7b7] text-base mr-6 hover:text-white transition-colors">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="text-[#b7b7b7] text-base hover:text-white transition-colors">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col lg={12} className="text-center">
            <div className="footer__copyright__text py-[20px]">
              <p className="text-[#b7b7b7] text-sm mb-0">
                Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
                <i className="fa fa-heart text-[#e53637]"></i> by{' '}
                <a href="#" className="text-[#e53637]">MFashion</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 