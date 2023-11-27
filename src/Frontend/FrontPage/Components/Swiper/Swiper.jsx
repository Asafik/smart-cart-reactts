import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './style.css';

export default function Aplikasi() {
    return (
        <>
            <div className='swiper-compponent'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='content-container'>
                            <p>
                                Bagus sekali untuk pembelajaran anak anak,
                                sangat menarik dan edukatif.
                            </p>
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt=' Slide 1'
                            />
                            <p
                                className='ulasan-customer'
                                style={{
                                    fontSize: '14px',
                                }}
                            >
                                Kadek Arista Putri
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
