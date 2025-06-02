import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* Preloader */}
      <div id="preloder" className="fixed inset-0 w-full h-full bg-black z-[999999]">
        <div className="loader absolute top-1/2 left-1/2 w-10 h-10 rounded-full border-4 border-red-500 border-l-transparent animate-spin"></div>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas-menu-overlay fixed inset-0 bg-black bg-opacity-70 z-[98] hidden"></div>
      <div className="offcanvas-menu-wrapper fixed left-[-300px] w-[300px] h-full bg-white p-[50px_20px_30px_30px] z-[99] overflow-y-auto opacity-0">
        {/* Offcanvas menu content */}
      </div>

      {/* Breadcrumb Section */}
      <section className="breadcrumb-option bg-[#f3f2ee] py-10">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="breadcrumb__text">
                <h4 className="text-[#111111] font-bold mb-2">About Us</h4>
                <div className="breadcrumb__links">
                  <a href="./index.html" className="text-sm text-[#111111] mr-[18px] inline-block relative">
                    Home
                    <span className="absolute right-[-14px] top-0">›</span>
                  </a>
                  <span className="text-sm text-[#b7b7b7] inline-block">About Us</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about py-[70px]">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="about__pic mb-[35px]">
                <img src="img/about/about-us.jpg" alt="" className="min-w-full" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="about__item mb-[30px]">
                <h4 className="text-[#111111] font-bold mb-2.5">Who We Are ?</h4>
                <p className="mb-0">
                  Contextual advertising programs sometimes have strict policies that need to be adhered too.
                  Let's take Google as an example.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="about__item mb-[30px]">
                <h4 className="text-[#111111] font-bold mb-2.5">Who We Do ?</h4>
                <p className="mb-0">
                  In this digital generation where information can be easily obtained within seconds, business
                  cards still have retained their importance.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="about__item mb-[30px]">
                <h4 className="text-[#111111] font-bold mb-2.5">Why Choose Us</h4>
                <p className="mb-0">
                  A two or three storey house is the ideal way to maximise the piece of earth on which our home
                  sits, but for older or infirm people.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial bg-[#f3f2ee]">
        <Container fluid>
          <Row>
            <Col lg={6} className="p-0">
              <div className="testimonial__text py-[130px_150px_175px] text-center">
                <span className="icon_quotations text-[72px] text-[#e53637]"></span>
                <p className="text-[#111111] text-xl italic leading-[30px] pt-3 mb-6">
                  "Going out after work? Take your butane curling iron with you to the office, heat it up,
                  style your hair before you leave the office and you won't have to make a trip back home."
                </p>
                <div className="testimonial__author inline-block">
                  <div className="testimonial__author__pic float-left mr-5">
                    <img src="img/about/testimonial-author.jpg" alt="" className="h-[60px] w-[60px] rounded-full" />
                  </div>
                  <div className="testimonial__author__text overflow-hidden pt-1">
                    <h5 className="text-[#111111] font-bold mb-1">Augusta Schultz</h5>
                    <p className="text-[#b7b7b7] mb-0">Fashion Design</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="testimonial__pic set-bg h-[600px]" style={{ backgroundImage: "url('img/about/testimonial-pic.jpg')" }}></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Counter Section */}
      <section className="counter py-[70px]">
        <Container>
          <div className="border-b border-[#e5e5e5] pb-[70px]">
            <Row>
              <Col lg={3} md={6} sm={6}>
                <div className="counter__item mb-[30px] overflow-hidden">
                  <div className="counter__item__number float-left mr-[15px]">
                    <h2 className="cn_num text-[#111111] font-bold text-[60px] leading-[50px] inline-block">102</h2>
                  </div>
                  <span className="block text-[#3d3d3d] text-lg font-bold leading-[25px] overflow-hidden">
                    Our <br />Clients
                  </span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="counter__item mb-[30px] overflow-hidden">
                  <div className="counter__item__number float-left mr-[15px]">
                    <h2 className="cn_num text-[#111111] font-bold text-[60px] leading-[50px] inline-block">30</h2>
                  </div>
                  <span className="block text-[#3d3d3d] text-lg font-bold leading-[25px] overflow-hidden">
                    Total <br />Categories
                  </span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="counter__item mb-[30px] overflow-hidden">
                  <div className="counter__item__number float-left mr-[15px]">
                    <h2 className="cn_num text-[#111111] font-bold text-[60px] leading-[50px] inline-block">102</h2>
                  </div>
                  <span className="block text-[#3d3d3d] text-lg font-bold leading-[25px] overflow-hidden">
                    In <br />Country
                  </span>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="counter__item mb-[30px] overflow-hidden">
                  <div className="counter__item__number float-left mr-[15px]">
                    <h2 className="cn_num text-[#111111] font-bold text-[60px] leading-[50px] inline-block">98</h2>
                    <strong className="text-[#111111] font-bold text-[60px] leading-[50px] inline-block">%</strong>
                  </div>
                  <span className="block text-[#3d3d3d] text-lg font-bold leading-[25px] overflow-hidden">
                    Happy <br />Customer
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team py-[70px]">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title text-center mb-[45px]">
                <span className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] mb-[15px] block">Our Team</span>
                <h2 className="text-[#111111] font-bold leading-[46px]">Meet Our Team</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} sm={6}>
              <div className="team__item mb-[30px]">
                <img src="img/about/team-1.jpg" alt="" className="min-w-full mb-[25px]" />
                <h4 className="text-[#111111] font-bold mb-2">John Smith</h4>
                <span className="text-sm text-[#b7b7b7] block">Fashion Design</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="team__item mb-[30px]">
                <img src="img/about/team-2.jpg" alt="" className="min-w-full mb-[25px]" />
                <h4 className="text-[#111111] font-bold mb-2">Christine Wise</h4>
                <span className="text-sm text-[#b7b7b7] block">C.E.O</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="team__item mb-[30px]">
                <img src="img/about/team-3.jpg" alt="" className="min-w-full mb-[25px]" />
                <h4 className="text-[#111111] font-bold mb-2">Sean Robbins</h4>
                <span className="text-sm text-[#b7b7b7] block">Manager</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6}>
              <div className="team__item mb-[30px]">
                <img src="img/about/team-4.jpg" alt="" className="min-w-full mb-[25px]" />
                <h4 className="text-[#111111] font-bold mb-2">Lucy Myers</h4>
                <span className="text-sm text-[#b7b7b7] block">Delivery</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client Section */}
      <section className="clients py-[25px]">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title text-center mb-[45px]">
                <span className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] mb-[15px] block">Partner</span>
                <h2 className="text-[#111111] font-bold leading-[46px]">Happy Clients</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Col lg={3} md={4} sm={4} xs={6} key={item}>
                <a href="#" className="client__item block mb-[75px] text-center">
                  <img src={`img/clients/client-${item}.png`} alt="" />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-[#111111] pt-[70px]">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={6}>
              <div className="footer__about mb-[30px]">
                <div className="footer__logo mb-[30px]">
                  <a href="#">
                    <img src="img/footer-logo.png" alt="" className="inline-block" />
                  </a>
                </div>
                <p className="text-[#b7b7b7] mb-[30px]">
                  The customer is at the heart of our unique business model, which includes design.
                </p>
                <a href="#">
                  <img src="img/payment.png" alt="" />
                </a>
              </div>
            </Col>
            <Col lg={2} xl={{ span: 2, offset: 1 }} md={3} sm={6}>
              <div className="footer__widget mb-[30px]">
                <h6 className="text-white text-sm font-bold uppercase tracking-[2px] mb-5">Shopping</h6>
                <ul>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Clothing Store</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Trending Shoes</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Accessories</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Sale</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <div className="footer__widget mb-[30px]">
                <h6 className="text-white text-sm font-bold uppercase tracking-[2px] mb-5">Shopping</h6>
                <ul>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Contact Us</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Payment Methods</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Delivary</a>
                  </li>
                  <li className="leading-9 list-none">
                    <a href="#" className="text-[#b7b7b7] text-sm">Return & Exchanges</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} xl={{ span: 3, offset: 1 }} md={6} sm={6}>
              <div className="footer__widget mb-[30px]">
                <h6 className="text-white text-sm font-bold uppercase tracking-[2px] mb-5">NewLetter</h6>
                <div className="footer__newslatter">
                  <p className="text-[#b7b7b7]">
                    Be the first to know about new arrivals, look books, sales & promos!
                  </p>
                  <form action="#" className="relative">
                    <input
                      type="text"
                      placeholder="Your email"
                      className="w-full text-sm text-[#3d3d3d] bg-transparent border-none py-[15px_0] border-b-2 border-white"
                    />
                    <button
                      type="submit"
                      className="text-[#b7b7b7] text-base absolute right-1 top-0 h-full bg-transparent border-none"
                    >
                      <span className="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <div className="footer__copyright__text border-t border-[rgba(255,255,255,0.1)] py-5 mt-10">
                <p className="text-[#b7b7b7] mb-0">
                  Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
                  <i className="fa fa-heart-o text-[#e53637]" aria-hidden="true"></i> by{' '}
                  <a href="https://colorlib.com" target="_blank" rel="noreferrer" className="text-[#e53637]">
                    Colorlib
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Search Modal */}
      <div className="search-model fixed inset-0 w-full h-full hidden z-[99999] bg-black">
        <div className="h-full flex items-center justify-center">
          <div className="search-close-switch text-white text-[28px] leading-[28px] absolute top-[30px] right-[30px] cursor-pointer rotate-45 flex items-center justify-center">
            +
          </div>
          <form className="search-model-form px-[15px]">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
              className="w-full text-[40px] border-none border-b-2 border-[#333] bg-transparent text-[#999]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;