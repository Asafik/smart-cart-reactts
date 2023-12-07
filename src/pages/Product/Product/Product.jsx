import Navbar from '../../../components/Navbar/NavbarComponents';
import Footer from '../../../components/Footer/FooterComponents';
import { Link } from 'react-router-dom';
import './product.css';

import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Product = () => {
    return (
        <>
            <Navbar />
            <div className='product'>
                <h1>Produk Kami</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Amet, nisi!
                </p>
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
                        className='product-mySwiper'
                    >
                        <SwiperSlide>
                            <div className='product-swiper-slider'>
                                <div className='product-box'>
                                    <img
                                        src='assets/img/Card/animal.png'
                                        alt=''
                                    />
                                    <h5>Seri Animal</h5>
                                    <p>Terdiri Dari 24 kartu Binatang </p>
                                    <div className='product-cart-icons'>
                                        <Link to='/detail-produk'>
                                            <AiOutlineShoppingCart />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-swiper-slider'>
                                <div className='product-box'>
                                    <img
                                        src='assets/img/Card/animal.png'
                                        alt=''
                                    />
                                    <h5>Seri Animal</h5>
                                    <p>Terdiri Dari 24 kartu Binatang </p>
                                    <div className='product-cart-icons'>
                                        <Link to='/detail-produk'>
                                            <AiOutlineShoppingCart />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='product-swiper-slider'>
                                <div className='product-box'>
                                    <img
                                        src='assets/img/Card/animal.png'
                                        alt=''
                                    />
                                    <h5>Seri Animal</h5>
                                    <p>Terdiri Dari 24 kartu Binatang </p>
                                    <div className='product-cart-icons'>
                                        <Link to='/detail-produk'>
                                            <AiOutlineShoppingCart />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
