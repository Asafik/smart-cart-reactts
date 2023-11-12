import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import './css/product.css';

import { FaShoppingCart } from 'react-icons/fa';
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
            <NavbarComponents />
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
                        className='mySwiper'
                    >
                        <SwiperSlide>
                            <div className='swiper-slider'>
                                <div className='box'>
                                    <img
                                        src='assets/img/Card/animal.png'
                                        alt=''
                                    />
                                    <h5>Seri Animal</h5>
                                    <p>Terdiri Dari 24 kartu Binatang </p>
                                    <div className='cart-icons'>
                                        <FaShoppingCart />
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
                                        <FaShoppingCart />
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
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swiper-slider'>
                                <div className='box'>
                                    <img
                                        src='assets/img/Card/animal.png'
                                        alt=''
                                    />
                                    <h5>Seri Animal</h5>
                                    <p>Terdiri Dari 24 kartu Binatang </p>
                                    <div className='cart-icons'>
                                        <FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <FooterComponents />
        </>
    );
};

export default Product;
