import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';

const Cekstatus = () => {
    return (
        <>
            <NavbarComponents />
            <Container style={{ paddingTop: '120px' }}>
                <Row className='min-vh-100 d-flex justify-content-between align-items-center'>
                    <div className='box-status'>
                        <div className='box-container'>
                            <img
                                src='assets/img/icon/box.png'
                                alt='Box'
                                className='box-status'
                            />
                            <p className='box-text'>Dikemas</p>
                            <div class='line-left'></div>
                            <img
                                src='assets/img/icon/check.png'
                                alt='Check'
                                className='check-status'
                            />
                        </div>
                        <div className='box-container'>
                            <img
                                src='assets/img/icon/fast-delivery.png'
                                alt='fastdelivery'
                                className='fastdelivery-status'
                            />
                            <p className='fastdelivery-text'>
                                Dalam Perjalanan
                            </p>
                            <div class='line-right'></div>
                            <img
                                src='assets/img/icon/circle2.png'
                                alt='Circle'
                                className='circle2'
                            />
                        </div>
                        <div className='box-container'>
                            <img
                                src='assets/img/icon/arrival.png'
                                alt='arrival'
                                className='arrival'
                            />
                            <p className='arrival-text'>Diterima</p>
                            <img
                                src='assets/img/icon/circle3.png'
                                alt='Circle3'
                                className='circle3'
                            />
                        </div>
                    </div>

                    <div className='no-pesanan'>
                        <img
                            src='assets/img/icon/shoppingcart.png'
                            alt='ShoppingCart'
                            className='shoppingcart'
                        />
                        <h3>Pesanan No. 003124</h3>
                    </div>
                    <div className='detail-pesanan-container'>
                        <div className='detail-pesanan fw-bold'>
                            <p>
                                Penerima : <span>Loremipsum</span>
                            </p>
                            <p>
                                Alamat :{' '}
                                <span>
                                    Jl. Loremipsum Gg.X No.12 RT 03 RW 02 -
                                    688432
                                </span>
                            </p>
                            <p>
                                No Handphone : <span>0813456789021</span>
                            </p>
                            <p>Detail Order : </p>
                            <div className='order-details'>
                                <img src='assets/img/Card/cat.png' alt='' />
                                <div className='order-text'>
                                    <p>Animal Smart Card</p>
                                    <p>
                                        Rp. 30.000 <span>X2</span>
                                    </p>
                                    <hr />
                                    <p>
                                        Total <span>Rp. 60.000</span>
                                    </p>
                                </div>
                            </div>
                            <div class='ok-pesanan'>
                                <Link
                                    to='/selesai'
                                    className='ok-pesanan-button'
                                >
                                    OK
                                </Link>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Cekstatus;
