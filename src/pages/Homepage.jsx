import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homepage = () => {

  return (
    <div className="font-sans">
      {/* Offcanvas Menu */}
      <div className="offcanvas-menu-overlay fixed inset-0 bg-black/70 z-[98] transition-all duration-500 invisible"></div>
      <div className="offcanvas-menu-wrapper fixed left-[-300px] w-[300px] h-full bg-white p-[50px_20px_30px_30px] z-[99] overflow-y-auto transition-all duration-500 opacity-0">
        {/* Offcanvas menu content would go here */}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <Carousel>
          <Carousel.Item className="hero__items h-[800px] pt-[230px] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: 'url(img/hero/hero-1.jpg)' }}>
            <Container>
              <Row>
                <Col xl={5} lg={7} md={8}>
                  <div className="hero__text">
                    <h6 className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] mb-7 relative top-[100px] opacity-0 transition-all duration-300">Summer Collection</h6>
                    <h2 className="text-[#111111] text-[48px] font-bold leading-[58px] mb-[30px] relative top-[100px] opacity-0 transition-all duration-600">Fall - Winter Collections 2030</h2>
                    <p className="text-base leading-[28px] mb-[35px] relative top-[100px] opacity-0 transition-all duration-900">
                      A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
                    </p>
                    <Button variant="primary" className="primary-btn relative top-[100px] opacity-0 transition-all duration-[1.1s]">
                      Shop now <span className="arrow_right"></span>
                    </Button>
                    <div className="hero__social mt-[190px]">
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-facebook"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-twitter"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-pinterest"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block"><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="hero__items h-[800px] pt-[230px] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
            <Container>
              <Row>
                <Col xl={5} lg={7} md={8}>
                  <div className="hero__text">
                    <h6 className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] mb-7 relative top-[100px] opacity-0 transition-all duration-300">Summer Collection</h6>
                    <h2 className="text-[#111111] text-[48px] font-bold leading-[58px] mb-[30px] relative top-[100px] opacity-0 transition-all duration-600">Fall - Winter Collections 2030</h2>
                    <p className="text-base leading-[28px] mb-[35px] relative top-[100px] opacity-0 transition-all duration-900">
                      A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
                    </p>
                    <Button variant="primary" className="primary-btn relative top-[100px] opacity-0 transition-all duration-[1.1s]">
                      Shop now <span className="arrow_right"></span>
                    </Button>
                    <div className="hero__social mt-[190px]">
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-facebook"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-twitter"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block mr-8"><i className="fa fa-pinterest"></i></a>
                      <a href="#" className="text-[#3d3d3d] text-base inline-block"><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Banner Section */}
      <section className="banner spad py-[100px]">
        <Container>
          <Row>
            <Col lg={7} className="offset-lg-4">
              <div className="banner__item relative overflow-hidden mb-[40px]">
                <div className="banner__item__pic float-right">
                  <img src="img/banner/banner-1.jpg" alt="Banner 1" className="w-full" />
                </div>
                <div className="banner__item__text max-w-[300px] absolute left-0 top-[140px]">
                  <h2 className="text-[#111111] font-bold leading-[46px] mb-2.5">Clothing Collections 2030</h2>
                  <a href="#" className="text-[#111111] text-xs font-bold uppercase tracking-[4px] py-1 inline-block relative">
                    Shop now
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#111111] transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="banner__item banner__item--middle mb-[40px]">
                <div className="banner__item__pic float-none">
                  <img src="img/banner/banner-2.jpg" alt="Banner 2" className="w-full" />
                </div>
                <div className="banner__item__text relative top-0 left-0 max-w-full pt-[22px]">
                  <h2 className="text-[#111111] font-bold leading-[46px] mb-2.5">Accessories</h2>
                  <a href="#" className="text-[#111111] text-xs font-bold uppercase tracking-[4px] py-1 inline-block relative">
                    Shop now
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#111111] transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="banner__item banner__item--last mb-[40px]">
                <div className="banner__item__pic">
                  <img src="img/banner/banner-3.jpg" alt="Banner 3" className="w-full" />
                </div>
                <div className="banner__item__text max-w-[300px] absolute left-0 top-[140px]">
                  <h2 className="text-[#111111] font-bold leading-[46px] mb-2.5">Shoes Spring 2030</h2>
                  <a href="#" className="text-[#111111] text-xs font-bold uppercase tracking-[4px] py-1 inline-block relative">
                    Shop now
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#111111] transition-all duration-300"></span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Section */}
      <section className="product spad py-[100px]">
        <Container>
          <Row>
            <Col lg={12}>
              <ul className="filter__controls flex justify-center mb-[45px]">
                <li className="active text-[#111111] text-2xl font-bold list-none inline-block mr-[88px] cursor-pointer" data-filter="*">Best Sellers</li>
                <li className="text-[#b7b7b7] text-2xl font-bold list-none inline-block mr-[88px] cursor-pointer" data-filter=".new-arrivals">New Arrivals</li>
                <li className="text-[#b7b7b7] text-2xl font-bold list-none inline-block cursor-pointer" data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </Col>
          </Row>
          <Row className="product__filter">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Col key={item} lg={3} md={6} sm={6} className={`mix ${item % 2 === 1 ? 'new-arrivals' : 'hot-sales'}`}>
                <div className="product__item overflow-hidden mb-[40px]">
                  <div className="product__item__pic h-[260px] relative bg-center bg-cover" style={{ backgroundImage: `url(img/product/product-${item}.jpg)` }}>
                    {item === 1 && <span className="label absolute left-0 top-5 text-[#111111] text-xs font-bold uppercase tracking-[2px] inline-block py-1 px-4 bg-white">New</span>}
                    {[3, 6].includes(item) && <span className="label absolute left-0 top-5 text-white text-xs font-bold uppercase tracking-[2px] inline-block py-1 px-4 bg-[#111111]">Sale</span>}
                    <ul className="product__hover absolute right-[-200px] top-5 transition-all duration-[0.8s]">
                      <li className="list-none mb-2.5 relative">
                        <Link to="/wishlist"><img src="img/icon/heart.png" alt="Wishlist" /></Link>
                      </li>
                      <li className="list-none mb-2.5 relative">
                        <Link to="/compare"><img src="img/icon/compare.png" alt="Compare" /> <span className="text-white text-xs bg-[#111111] inline-block py-1 px-2.5 absolute left-[-78px] top-1 z-[1] opacity-0 invisible transition-all duration-300">Compare</span></Link>
                      </li>
                      <li className="list-none relative">
                        <Link to={`/product/${item}`}><img src="img/icon/search.png" alt="Search" /></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text pt-6 relative">
                    <Link to={`/product/${item}`} className="add-cart text-[#e53637] text-sm font-bold absolute left-0 top-0 opacity-0 invisible transition-all duration-300">+ Add To Cart</Link>
                    <h6 className="text-[#111111] text-sm font-semibold mb-1 transition-all duration-300">
                      <Link to={`/product/${item}`}>Piqué Biker Jacket</Link>
                    </h6>
                    <div className="rating mb-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fa ${[3, 6].includes(item) && star <= 3 ? 'fa-star' : 'fa-star-o'} text-sm text-[#b7b7b7] mr-[-5px]`}></i>
                      ))}
                    </div>
                    <h5 className="text-[#0d0d0d] font-bold">${[67.24, 67.24, 43.48, 60.9, 31.37, 98.49, 49.66, 26.28][item-1]}</h5>
                    <div className="product__color__select absolute right-0 bottom-0 opacity-0 transition-all duration-500">
                      <label htmlFor={`pc-${item*3-2}`} className="inline-block h-3 w-3 rounded-full bg-[#5e64d1] relative mr-1 mb-0 cursor-pointer">
                        <input type="radio" id={`pc-${item*3-2}`} className="absolute invisible" />
                      </label>
                      <label htmlFor={`pc-${item*3-1}`} className="active black inline-block h-3 w-3 rounded-full bg-[#404a47] relative mr-1 mb-0 cursor-pointer">
                        <input type="radio" id={`pc-${item*3-1}`} className="absolute invisible" />
                      </label>
                      <label htmlFor={`pc-${item*3}`} className="grey inline-block h-3 w-3 rounded-full bg-[#d5a667] relative mb-0 cursor-pointer">
                        <input type="radio" id={`pc-${item*3}`} className="absolute invisible" />
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories spad py-[100px] bg-[#f3f2ee] overflow-hidden">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="categories__text pt-10 relative z-[1] mb-[40px]">
                <h2 className="text-[#b7b7b7] text-[34px] leading-[72px]">
                  Clothings Hot <br /> <span className="text-[#111111] font-bold">Shoe Collection</span> <br /> Accessories
                </h2>
              </div>
            </Col>
            <Col lg={4}>
              <div className="categories__hot__deal relative z-[5] mb-[40px]">
                <img src="img/product-sale.png" alt="Hot Deal" className="min-w-full" />
                <div className="hot__deal__sticker h-[100px] w-[100px] bg-[#111111] rounded-full pt-[22px] text-center absolute right-0 top-[-36px]">
                  <span className="text-white text-sm block mb-1">Sale Of</span>
                  <h5 className="text-white text-xl font-bold">$29.99</h5>
                </div>
              </div>
            </Col>
            <Col lg={4} className="offset-lg-1">
              <div className="categories__deal__countdown">
                <span className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] block mb-4">Deal Of The Week</span>
                <h2 className="text-[#111111] font-bold leading-[46px] mb-6">Multi-pocket Chest Bag Black</h2>
                <div className="categories__deal__countdown__timer mb-5 overflow-hidden ml-[-30px]" id="countdown">
                  <div className="cd-item float-left w-1/4 mb-6 text-center relative">
                    <span className="text-[#111111] font-bold text-4xl block">3</span>
                    <p className="mb-0">Days</p>
                  </div>
                  <div className="cd-item float-left w-1/4 mb-6 text-center relative">
                    <span className="text-[#111111] font-bold text-4xl block">1</span>
                    <p className="mb-0">Hours</p>
                  </div>
                  <div className="cd-item float-left w-1/4 mb-6 text-center relative">
                    <span className="text-[#111111] font-bold text-4xl block">50</span>
                    <p className="mb-0">Minutes</p>
                  </div>
                  <div className="cd-item float-left w-1/4 mb-6 text-center relative">
                    <span className="text-[#111111] font-bold text-4xl block">18</span>
                    <p className="mb-0">Seconds</p>
                  </div>
                </div>
                <Button variant="primary" as={Link} to="/shop" className="primary-btn">Shop now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Instagram Section */}
      <section className="instagram spad py-[100px]">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="instagram__pic flex flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Link key={item} to={`/instagram/${item}`} className="instagram__pic__item w-1/3 h-[261px] bg-center bg-cover" style={{ backgroundImage: `url(img/instagram/instagram-${item}.jpg)` }}></Link>
                ))}
              </div>
            </Col>
            <Col lg={4}>
              <div className="instagram__text pt-[130px]">
                <h2 className="text-[#111111] font-bold mb-[30px]">Instagram</h2>
                <p className="mb-[65px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
                <h3 className="text-[#e53637] font-bold">#Male_Fashion</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Latest Blog Section */}
      <section className="latest spad py-[100px]">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title text-center mb-[45px]">
                <span className="text-[#e53637] text-sm font-bold uppercase tracking-[2px] block mb-4">Latest News</span>
                <h2 className="text-[#111111] font-bold leading-[46px]">Fashion New Trends</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {[1, 2, 3].map((item) => (
              <Col key={item} lg={4} md={6} sm={6}>
                <div className="blog__item mb-[45px]">
                  <Link to={`/blog/${item}`} className="blog__item__pic h-[270px] bg-cover bg-center" style={{ backgroundImage: `url(img/blog/blog-${item}.jpg)` }}></Link>
                  <div className="blog__item__text p-[30px] mx-[30px] mt-[-35px] bg-white transition-all duration-300 shadow-[0px_15px_60px_rgba(67,69,70,0.05)]">
                    <span className="text-[#3d3d3d] text-xs block mb-2.5">
                      <img src="img/icon/calendar.png" alt="Calendar" className="mr-1.5" /> {['16 February 2020', '21 February 2020', '28 February 2020'][item-1]}
                    </span>
                    <h5 className="text-[#0d0d0d] font-bold leading-[28px] mb-2.5">
                      <Link to={`/blog/${item}`}>
                        {['What Curling Irons Are The Best Ones', 'Eternity Bands Do Last Forever', 'The Health Benefits Of Sunglasses'][item-1]}
                      </Link>
                    </h5>
                    <Link to={`/blog/${item}`} className="text-[#111111] text-xs font-bold uppercase tracking-[4px] py-1 inline-block relative">
                      Read More
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#111111] transition-all duration-300"></span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Search Modal */}
      <div className="search-model fixed w-full h-full left-0 top-0 bg-black z-[99999] hidden">
        <div className="h-full flex items-center justify-center">
          <div className="search-close-switch text-white text-2xl h-[50px] w-[50px] bg-[#333] rounded-full flex items-center justify-center cursor-pointer rotate-45">+</div>
          <form className="search-model-form p-0 px-[15px]">
            <input type="text" id="search-input" placeholder="Search here....." className="w-[500px] text-[40px] border-none border-b-2 border-[#333] bg-transparent text-[#999]" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;