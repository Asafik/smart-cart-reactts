import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const notifikasi = () => {
    return (
        <>
            <NavbarComponents />
            <Container>
                <Row className='min-vh-100'>
                    <Col>
                        <div className='informasi-profile'>
                            <h3>Akun Saya</h3>
                            {/* Tampilkan foto profil */}
                            <img
                                src='assets/img/profil/kera.jpg'
                                alt='Foto Profil'
                            />
                            <p className='name'>Ahmad Amrozi</p>
                            <p className='email'>johndoe@example.com</p>

                            <div className='menu'>
                                <Link to='/informasi'>Informasi Pribadi</Link>
                                <Link to='/koleksi'>Koleksi Saya</Link>
                                <Link to='/notifikasi'>Notifikasi</Link>
                                <Link to='/bahasa'>Bahasa</Link>
                                <Link to='/logout'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='notifikasi'>
                            <h3>Notifikasi</h3>
                            <p>Atur notifikasi yang kamu terima disini</p>
                            <p className='text-icons'>
                                <AiOutlineShoppingCart />
                                Transaksi Pembelian <span>Email</span>
                            </p>

                            <Form>
                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Menunggu Pembayaran
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch1'
                                    />
                                </div>

                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Menunggu Konfirmasi
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch2'
                                    />
                                </div>

                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Pesanan Diproses
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch3'
                                    />
                                </div>

                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Pesanan Dikirim
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch4'
                                    />
                                </div>

                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Pesanan Tiba
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch5'
                                    />
                                </div>

                                <p className='info-icons'>
                                    <HiOutlineInformationCircle />
                                    <span>Informasi</span>
                                </p>

                                <div className='from-position'>
                                    <span className='custom-switch-text'>
                                        Promo
                                    </span>
                                    <Form.Check
                                        type='switch'
                                        id='custom-switch6'
                                    />
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
};

export default notifikasi;
