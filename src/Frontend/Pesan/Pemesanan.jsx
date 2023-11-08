import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavbarComponents from '../Components/FooterComponents';
import FooterComponents from '../Components/FooterComponents';

const Pemesanan = () => {
    return (
        <>
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
                            <img src='assets/img/icon/circle2.png' alt='' />
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

            <Container className='pemesanan'>
                <Row className='min-vh-100'>
                    <Col xs={12} md={6}>
                        <Form>
                            <Form.Group controlId='nama'>
                                <Form.Label>Nama</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Masukkan nama Anda'
                                    style={{
                                        borderWidth: '2px',
                                        borderColor: 'black',
                                    }} // Menambahkan garis tebal
                                />
                            </Form.Group>
                            <Form.Group controlId='alamat'>
                                <Form.Label>Alamat Pengiriman</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Masukkan alamat pengiriman Anda'
                                    style={{
                                        borderWidth: '2px',
                                        borderColor: 'black',
                                    }} // Menambahkan garis tebal
                                />
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Masukkan email Anda'
                                    style={{
                                        borderWidth: '2px',
                                        borderColor: 'black',
                                    }} // Menambahkan garis tebal
                                />
                            </Form.Group>
                            <Form.Group controlId='nomorTelepon'>
                                <Form.Label>Nomor Telepon</Form.Label>
                                <Form.Control
                                    type='tel'
                                    placeholder='Masukkan nomor telepon Anda'
                                    style={{
                                        borderWidth: '2px',
                                        borderColor: 'black',
                                    }} // Menambahkan garis tebal
                                />
                            </Form.Group>
                        </Form>
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
                                    <p className='harga-angka'>Rp. 60.000</p>
                                </div>
                            </div>
                            <div className='button-container'>
                                <div className='button-kembali'>
                                    <Link to='/product'>
                                        <Button>Kembali</Button>
                                    </Link>
                                </div>
                                <div className='button-bayar'>
                                    <Link to='/pembayaran'>
                                        <Button>Bayar</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
};

export default Pemesanan;
