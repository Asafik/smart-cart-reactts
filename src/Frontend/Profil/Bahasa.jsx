import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import './css/bahasa.css';

const Bahasa = () => {
    return (
        <>
            <NavbarComponents />
            <Container>
                <Row className='bahasa-saya min-vh-100'>
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
                                <Link to='/'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='bahasa'>
                            <h3>Bahasa</h3>
                            <div class='form'>
                                <div class='form-check'>
                                    <label for='reverse-html-1'>
                                        English (US)
                                    </label>
                                    <input
                                        type='radio'
                                        id='reverse-html-1'
                                        name='group1'
                                    />
                                </div>
                                <div class='form-check'>
                                    <label for='reverse-html-2'>
                                        English (UK)
                                    </label>
                                    <input
                                        type='radio'
                                        id='reverse-html-2'
                                        name='group1'
                                    />
                                </div>
                                <div class='form-check'>
                                    <label for='reverse-html-3'>
                                        Indonesia
                                    </label>
                                    <input
                                        type='radio'
                                        id='reverse-html-3'
                                        name='group1'
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
};

export default Bahasa;
