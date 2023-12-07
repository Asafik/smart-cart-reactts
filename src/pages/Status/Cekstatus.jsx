import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/NavbarComponents';
import Footer from '../../components/Footer/FooterComponents';

import './cekstatus.css';

const Cekstatus = () => {
    return (
        <>
            <Navbar />
            <Container style={{ paddingTop: '120px' }}>
                <Row className='min-vh-100'>
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
                    <div className='status-pemesanan-detail'>
                        <p>
                            Penerima
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            : &nbsp;Agus
                        </p>
                        <p>
                            Alamat
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            : &nbsp;Jl. Loremipsum Gg.X No.12 RT 03 RW 02 -
                            688432
                        </p>
                        <p>
                            No. Handphone &nbsp;&nbsp;&nbsp; :&nbsp;
                            0813456789021
                        </p>
                        <p>Detail Order</p>
                        <div className='detail-order'>
                            <div className='detail-order-img'>
                                <img src='assets/img/Card/cat.png' alt='cat' />
                            </div>
                            <div className='detail-order-text'>
                                <p>
                                    Order ID&nbsp;&nbsp;&nbsp;&nbsp; :{' '}
                                    <span>3245321</span>
                                </p>
                                <p>
                                    Order Item : <span>Animal Smart Card</span>
                                </p>
                                <hr />
                                <p>
                                    Estimasi Diterima :{' '}
                                    <span>23 Desember 2023</span>
                                </p>
                            </div>
                        </div>
                        <Link to='/'>OK</Link>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Cekstatus;
