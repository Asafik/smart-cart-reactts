import { Navbar, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Footer from '../../../../components/Footer/FooterComponents';
import Permata from '../Components/CarabayarBank/Permata';

import './carabayar.css';

const CaraBayar = () => {
    return (
        <>
            <div className='navbar-pesan'>
                <Navbar bg='white' expand='lg' className='mb-4'>
                    <Container>
                        <Link to='/'>
                            <img
                                src='assets/img/logo.png'
                                width='130'
                                alt='logoimage'
                            />
                        </Link>

                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>

                        <div className='info-text'>Informasi</div>
                        <div className='line'></div>
                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>

                        <div className='selesai-text'>Pembayaran</div>
                        <div className='line'></div>
                        <div className='number-container'>
                            <img src='assets/img/icon/circle3.png' alt='' />
                        </div>
                        <div className='selesai-text'>Selesai</div>
                    </Container>
                </Navbar>
            </div>
            <Container>
                <Row className='min-vh-100'>
                    <div className='cara-pembayaran'>
                        <div className='text-indent'>
                            <Link to='/tujuan-sebelumnya'>
                                <FaChevronLeft className='chevron-icon text-dark' />
                            </Link>
                            <h5 className='fw-bold'>Pembayaran</h5>
                        </div>

                        <hr />
                        <div className='cara-pembayaran-bank'>
                            <div className='total-bayar-text'>
                                <p>Total Pembayaran</p>
                                <p>Bayar Dalam</p>
                            </div>
                            <div className='right-align'>
                                <p className='text-total-bayar'>Rp. 60.000</p>

                                <p className='text-total-bayar'>
                                    23 jam 55 menit 40 detik
                                </p>
                                <p className='tempo'>
                                    Jatuh tempo 10 Ags 2023, 09:46
                                </p>
                            </div>
                        </div>

                        <div className='petunjuk-bayar-bni'>
                            <Permata />
                        </div>

                        <div className='button-ok'>
                            <Link
                                to='/selesai'
                                className='OK text-white link-box'
                            >
                                OK
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default CaraBayar;
