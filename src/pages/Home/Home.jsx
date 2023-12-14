import Navbar from '../../components/Navbar/NavbarComponents';
import Footer from '../../components/Footer/FooterComponents';

import './home.css';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Row className='home min-vh-100 d-flex align-items-center'>
                    <Col lg='6'>
                        <div className='header'>
                            <h1>Animal Smart Card</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed <br />
                                do eiusmod tempor incididunt ut labore Ut enim
                                ad minim <br />
                                veniam, quis nostrud exercitation ullamco
                                laboris nisi ut <br />
                                aliquip ex ea commodo con
                            </p>

                            <div className='custom-link'>
                                <Link to='/halaman-tujuan'>
                                    Beli Sekarang
                                    <span className='cart-box'>
                                        <FaShoppingCart />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <img src='assets/img/card-new.png' alt='' />
                    </Col>
                </Row>
            </Container>
            <div className='product-selengkapnya'>
                <h1>Produk Terlaris</h1>
                <p>
                    Lihat Semua Produk <FaArrowAltCircleRight />
                </p>
            </div>
            <div className='w-100 min-vh-100 d-flex align-items-center'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='swiper-slider'>
                            <div className='box'>
                                <img src='assets/img/Card/animal.png' alt='' />
                                <h5>Seri Animal</h5>
                                <p>Terdiri Dari 24 kartu Binatang </p>
                                <div className='cart-icons'>
                                    <AiOutlineShoppingCart />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slider'>
                            <div className='box'>
                                <img
                                    src='assets/img/Card/vegetables.png'
                                    alt=''
                                />
                                <h5>Seri Sayuran</h5>
                                <p>Terdiri Dari 24 kartu Sayuran </p>
                                <div className='cart-icons'>
                                    <AiOutlineShoppingCart />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slider'>
                            <div className='box'>
                                <img
                                    src='assets/img/Card/vegetables.png'
                                    alt=''
                                />
                                <h5>Seri Sayuran</h5>
                                <p>Terdiri Dari 24 kartu Sayuran </p>
                                <div className='cart-icons'>
                                    <AiOutlineShoppingCart />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slider'>
                            <div className='box'>
                                <img src='assets/img/Card/animal.png' alt='' />
                                <h5>Seri Animal</h5>
                                <p>Terdiri Dari 24 kartu Binatang </p>
                                <div className='cart-icons'>
                                    <AiOutlineShoppingCart />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='w-100 min-vh-100 d-flex'>
                <div className='about-home'>
                    <Container>
                        <Row>
                            <Col>
                                <h3>
                                    Animal Smart Card <br />
                                    Menggunakan Teknologi <br />
                                    Augmented Reality
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo con.
                                    Duis aute irure dolor in .
                                </p>
                                <div className='selengkapnya-link'>
                                    <Link to='/halaman-tujuan'>
                                        Beli Sekarang
                                        <span className='chevron-right'>
                                            <FaChevronRight />
                                        </span>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <img src='assets/img/boxcard.png' alt='' />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className=' text-center py-5'>
                <h1>Tersedia juga di Marketplace</h1>
            </div>
            <div className='marketpeace'>
                <Link to='https://shopee.co.id/'>
                    <img
                        src='assets/img/icon/shopee.png'
                        alt='Image 1'
                        className='image'
                    />
                </Link>
                <Link to='https://www.tokopedia.com/'>
                    <img
                        src='assets/img/icon/tokped.png'
                        alt='Image 2'
                        className='image'
                    />
                </Link>
                <Link to='https://www.tiktok.com/id-ID/'>
                    <img
                        src='assets/img/icon/tiktok.png'
                        alt='Image 3'
                        className='tiktok'
                    />
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Home;
