import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import FooterComponents from '../components/footercomponents';

function Pembayaran() {
    const [circleColors, setCircleColors] = useState({
        bri: 'green',
        bni: 'green',
        bca: 'green',
        mandiri: 'green',
        permata: 'green',
    });

    const [circleChecks, setCircleChecks] = useState({
        bri: false,
        bni: false,
        bca: false,
        mandiri: false,
        permata: false,
    });

    const handleCircleClick = (id) => {
        const newCircleColors = {};
        const newCircleChecks = {};

        // Reset semua warna lingkaran dan tanda cek
        Object.keys(circleColors).forEach((key) => {
            newCircleColors[key] = 'green';
            newCircleChecks[key] = false;
        });

        // Atur warna lingkaran yang diklik menjadi merah dan tanda cek menjadi true
        newCircleColors[id] = 'red';
        newCircleChecks[id] = true;

        setCircleColors(newCircleColors);
        setCircleChecks(newCircleChecks);
    };

    return (
        <div>
            <div className='navbar-pesan'>
                <Navbar bg='light' expand='lg' className='mb-4'>
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
                        <div className='number-container'>
                            <img src='assets/img/icon/check.png' alt='' />
                        </div>

                        <div className='selesai-text'>Pembayaran</div>
                        <div className='line'></div>
                        <div className='number-container'>
                            <img src='assets/img/icon/circle2.png' alt='' />
                        </div>
                        <div className='selesai-text'>Selesai</div>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Container>
                    <Row className='min-vh-100'>
                        <div className='image-wallet'>
                            <img
                                src='assets/img/Pembayaran/shopeepay.png'
                                alt='SHOPEEPAY'
                                className={`shopeepay ${
                                    circleColors['shopeepay'] === 'red'
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => handleCircleClick('shopeepay')}
                            />
                            <img
                                src='assets/img/Pembayaran/gopay.png'
                                alt='GOPAY'
                                className={`gopay ${
                                    circleColors['gopay'] === 'red'
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => handleCircleClick('gopay')}
                            />
                            <img
                                src='assets/img/Pembayaran/dana.png'
                                alt='DANA'
                                className={`dana ${
                                    circleColors['dana'] === 'red'
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => handleCircleClick('dana')}
                            />
                            <img
                                src='assets/img/Pembayaran/banktf.png'
                                alt='BANKTF'
                                className={`banktf ${
                                    circleColors['banktf'] === 'red'
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => handleCircleClick('banktf')}
                            />
                        </div>
                        <Col xs={12} md={6}>
                            <div className='image-bank'>
                                <div
                                    id='bri'
                                    className='circle'
                                    style={{
                                        backgroundColor: circleColors['bri'],
                                    }}
                                    onClick={() => handleCircleClick('bri')}
                                >
                                    {circleChecks['bri'] && (
                                        <span
                                            className='checkmark fw-bold'
                                            style={{
                                                color: 'white',
                                                fontSize: '20px',
                                            }}
                                        >
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                                <img
                                    src='assets/img/Pembayaran/bri.png'
                                    alt='BRI'
                                    className='bri'
                                />
                            </div>
                            <div className='image-bank'>
                                <div
                                    id='bni'
                                    className='circle'
                                    style={{
                                        backgroundColor: circleColors['bni'],
                                    }}
                                    onClick={() => handleCircleClick('bni')}
                                >
                                    {circleChecks['bni'] && (
                                        <span
                                            className='checkmark'
                                            style={{
                                                color: 'white',
                                                fontSize: '20px',
                                            }}
                                        >
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                                <img
                                    src='assets/img/Pembayaran/bni.png'
                                    alt='BNI'
                                    className='bni'
                                />
                            </div>
                            <div className='image-bank'>
                                <div
                                    id='bca'
                                    className='circle'
                                    style={{
                                        backgroundColor: circleColors['bca'],
                                    }}
                                    onClick={() => handleCircleClick('bca')}
                                >
                                    {circleChecks['bca'] && (
                                        <span
                                            className='checkmark'
                                            style={{
                                                color: 'white',
                                                fontSize: '20px',
                                            }}
                                        >
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                                <img
                                    src='assets/img/Pembayaran/bca.png'
                                    alt='BCA'
                                    className='bca'
                                />
                            </div>
                            <div className='image-bank'>
                                <div
                                    id='mandiri'
                                    className='circle'
                                    style={{
                                        backgroundColor:
                                            circleColors['mandiri'],
                                    }}
                                    onClick={() => handleCircleClick('mandiri')}
                                >
                                    {circleChecks['mandiri'] && (
                                        <span
                                            className='checkmark'
                                            style={{
                                                color: 'white',
                                                fontSize: '20px',
                                            }}
                                        >
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                                <img
                                    src='assets/img/Pembayaran/mandiri.png'
                                    alt='MANDIRI'
                                    className='mandiri'
                                />
                            </div>
                            <div className='image-bank'>
                                <div
                                    id='permata'
                                    className='circle'
                                    style={{
                                        backgroundColor:
                                            circleColors['permata'],
                                    }}
                                    onClick={() => handleCircleClick('permata')}
                                >
                                    {circleChecks['permata'] && (
                                        <span
                                            className='checkmark'
                                            style={{
                                                color: 'white',
                                                fontSize: '20px',
                                            }}
                                        >
                                            &#10003;
                                        </span>
                                    )}
                                </div>
                                <img
                                    src='assets/img/Pembayaran/permata.png'
                                    alt='PERMATA'
                                    className='permata'
                                />
                            </div>
                        </Col>

                        <Col xs={8} md={5}>
                            <div className='card'>
                                <div className='card-content'>
                                    <img
                                        src='assets/img/Card/cat.png'
                                        alt='Produk'
                                    />
                                    <div className='text-right'>
                                        <h3>Animal Smart Card</h3>
                                        <div className='price-container'>
                                            <p>Rp. 30.000</p>
                                            <p className='quantity'>X2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-text'></div>
                                <hr />
                                <div className='total-harga '>
                                    <div className='harga-container'>
                                        <p>Total Harga :</p>
                                        <p className='harga-angka'>
                                            Rp. 60.000
                                        </p>
                                    </div>
                                </div>
                                <div className='button-container'>
                                    <div className='button-kembali'>
                                        <Link to='/pemesanan'>
                                            <Button>Kembali</Button>
                                        </Link>
                                    </div>
                                    <div className='button-bayar'>
                                        <Link to='/petunjuk'>
                                            <Button>Buat Pesanan</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterComponents />
        </div>
    );
}

export default Pembayaran;
