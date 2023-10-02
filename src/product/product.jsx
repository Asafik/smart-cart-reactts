import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';

import { FaShoppingCart } from 'react-icons/fa';
// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const product = () => {
    return (
        <>
            <NavbarComponents />
            <div className='w-100 min-vh-100 d-flex align-items-center'>
                <div className='detail-product'>
                    
                    <div className='half-box'>
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
                            className='Swiper-product'
                        >
                            <SwiperSlide>
                                <div class='swiper-slider-product'>
                                    <div class='box-product'>
                                        <img
                                            src='assets/img/Card/animal.png'
                                            alt=''
                                        />
                                        <h5>Seri Animal</h5>
                                        <p>Terdiri Dari 24 kartu Binatang </p>
                                        <div className='cart-icons-product'>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class='swiper-slider-product'>
                                    <div class='box-product'>
                                        <img
                                            src='assets/img/Card/vegetables.png'
                                            alt=''
                                        />
                                        <h5>Seri Sayuran</h5>
                                        <p>Terdiri Dari 24 kartu Sayuran </p>
                                        <div className='cart-icons-product'>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class='swiper-slider-product'>
                                    <div class='box-product'>
                                        <img
                                            src='assets/img/Card/animal.png'
                                            alt=''
                                        />
                                        <h5>Seri Animal</h5>
                                        <p>Terdiri Dari 24 kartu Binatang </p>
                                        <div className='cart-icons-product'>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class='swiper-slider-product'>
                                    <div class='box-product'>
                                        <img
                                            src='assets/img/Card/vegetables.png'
                                            alt=''
                                        />
                                        <h5>Seri Sayuran</h5>
                                        <p>Terdiri Dari 24 kartu Sayuran </p>
                                        <div className='cart-icons-product'>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </>
    );
};

export default product;
