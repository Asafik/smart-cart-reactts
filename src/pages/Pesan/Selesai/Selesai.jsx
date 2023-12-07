import { Navbar, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from '../../../components/Footer/FooterComponents';
import './selesai.css';

const Selesai = () => {
    return (
        <>
            <div className='navbar-pesan'>
                <Navbar expand='lg' className='mb-4'>
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

                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>
                        <div className='selesai-text'>Selesai</div>
                    </Container>
                </Navbar>
            </div>
            <Container>
                <Row className='min-vh-100'>
                    <div className='check-mark'>
                        <img src='assets/img/icon/check-mark.png' alt='' />
                        <h4 className='fw-bold'>
                            Terimakasih atas pesanan anda!
                        </h4>
                        <p>
                            Konfirmasi pesanan telah dikirim ke
                            loremipsum@gmail.com
                        </p>

                        <div className='button-belanja'>
                            <Link
                                to='/produk'
                                className='belaja-kembali text-white'
                            >
                                Belanja Kembali
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Selesai;
