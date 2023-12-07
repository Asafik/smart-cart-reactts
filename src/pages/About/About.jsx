import Navbar from '../../components/Navbar/NavbarComponents';
import Footer from '../../components/Footer/FooterComponents';

import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
    BsArrowLeftCircle,
    BsArrowRightCircle,
    BsArrowUpRight,
} from 'react-icons/bs';

import './about.css';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='w-100 min-vh-100 d-flex'>
                <div className='about'>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    src='assets/img/Card/logoboxcard.png'
                                    alt=''
                                />
                            </Col>
                            <Col>
                                <h3>
                                    Animal Smart Card <br />
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit,
                                    <br />
                                    sed do eiusmod tempor incididunt ut labore
                                    Ut enim ad <br />
                                    minim veniam, quis nostrud exercitation
                                    ullamco laboris <br />
                                    nisi ut aliquip ex ea commodo con. Duis aute
                                    irure dolor
                                </p>
                                <p className='beli-product'>
                                    Beli sekarang <BsArrowUpRight />
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container className='about-two min-vh-100 '>
                <Row>
                    <Col>
                        <h1>
                            Smart Card Kami <br /> Memiliki Keunggulan
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla veniam iste expedita ratione non a
                            voluptatibus, magni omnis quasi recusandae, quaerat
                            quae hic! Cupiditate quo iste natus quis corporis
                            dolorem?
                        </p>
                        <p className='look-all-product'>
                            Beli sekarang <FaArrowRight />
                        </p>
                    </Col>
                    <Col>
                        <div className='about-image'>
                            <div class='image-text'>
                                <img
                                    src='assets/img/about/cookie-man.png'
                                    alt=''
                                />
                                <p>
                                    Belajar Rantai <br />
                                    Makanan Dalam <br />
                                    Game
                                </p>
                            </div>
                            <div class='image-text'>
                                <img src='assets/img/about/eating.png' alt='' />
                                <p>
                                    Belajar Nama <br />
                                    Hewan Dalam <br />
                                    Bahasa Inggris
                                </p>
                            </div>
                        </div>
                        <div className='about-image'>
                            <div class='image-text'>
                                <img
                                    src='assets/img/about/School-prep.png'
                                    alt=''
                                />
                                <p>
                                    Lebih Mudah <br />
                                    Mempelajari <br />
                                    Nama Hewan
                                </p>
                            </div>
                            <div class='image-text'>
                                <img src='assets/img/about/Frog.png' alt='' />
                                <p>
                                    Memperluas <br />
                                    Pengetahuan <br />
                                    Sang Anak!
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='about-three'>
                <Row>
                    <Col>
                        <img src='assets/img/Card/video.jpg' alt='' />
                    </Col>
                    <Col>
                        <h1>
                            Belajar Lebih Mudah <br /> dan Asik Dengan <br />{' '}
                            Smart Card
                        </h1>
                        <p className='beli-product'>
                            Beli sekarang <BsArrowUpRight />
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='about-four'>
                <div className='ulasan'>
                    <h1> Ulasan Pelanggan Kami </h1>
                    <p className='ulasan-icons'>
                        <BsArrowLeftCircle className='arrow-icon' />
                        <BsArrowRightCircle className='arrow-icon' />
                    </p>
                </div>
                <p className='text'>
                    Beberapa komentar,saran, dan masukan dari pelanggan kami
                </p>
            </Container>
            <div className='ulasan-pelanggan'></div>
            <Footer />
        </>
    );
};

export default About;
