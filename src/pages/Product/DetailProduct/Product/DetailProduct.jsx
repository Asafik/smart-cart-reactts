import Navbar from '../../../../components/Navbar/NavbarComponents';
import Footer from '../../../../components/Footer/FooterComponents';

import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import Count from '../Components/Count/Count';

import './detailproduct.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { Container, Row, Col } from 'react-bootstrap';

const Product = () => {
    return (
        <>
            <Navbar />
            <Container className='w-100 min-vh-100'>
                <Row className='product-detail'>
                    <Col>
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
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className='product-detail-mySwiper'
                        >
                            <SwiperSlide>
                                <img
                                    src='assets/img/Card/cat.png'
                                    alt='NamaFoto'
                                    className='custom-image'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='assets/img/Card/cat.png'
                                    alt='NamaFoto'
                                    className='custom-image'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src='assets/img/Card/cat.png'
                                    alt='NamaFoto'
                                    className='custom-image'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                    <Col>
                        {' '}
                        <div className='detail-column'>
                            <h1 className='fw-bold'>Animal Series</h1>
                            <div className='rating'>
                                {/* Icon bintang */}
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span
                                    style={{
                                        marginLeft: '10px',
                                        marginTop: '2px',
                                    }}
                                >
                                    100 Ulasan
                                </span>
                            </div>
                            <h2 className='fw-bold'>Harga: Rp. 30.000</h2>
                            <p>
                                Terdiri dari 24 kartu hewan unik dimana <br />
                                setiap kartu bisa di scan menggunakan <br />
                                aplikasi untuk memunculkan fitur <br />
                                Augmented Reality.
                            </p>
                            <div>
                                <div className='count-container'>
                                    <Count />
                                    <button className='buy-now-button'>
                                        <Link to='/beli-sekarang'>
                                            Beli Sekarang
                                        </Link>
                                    </button>

                                    <div className='icons-cart-like'>
                                        <div className='to-cart'>
                                            <Link to='/cart'>
                                                <AiOutlineShoppingCart />
                                            </Link>
                                        </div>

                                        <div className='my-like'>
                                            <Link to='/heart'>
                                                <AiOutlineHeart />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <p
                                    style={{
                                        marginTop: '10px',
                                    }}
                                >
                                    Pembelian Dalam Bentuk Pack Bukan Satuan
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Product;
