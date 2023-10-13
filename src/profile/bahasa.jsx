import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';
import Form from 'react-bootstrap/Form';

const bahasa = () => {
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
                                <Link to='/'>Keluar</Link>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='bahasa'>
                            <h3>Bahasa</h3>

                            <Form>
                                {['radio'].map((type) => (
                                    <div
                                        key={`reverse-${type}`}
                                        className='mb-3'
                                    >
                                        <Form.Check
                                            reverse
                                            label='English (US)'
                                            name='group1'
                                            type={type}
                                            id={`reverse-${type}-1`}
                                        />
                                        <Form.Check
                                            reverse
                                            label='English (UK)'
                                            name='group1'
                                            type={type}
                                            id={`reverse-${type}-2`}
                                        />
                                        <Form.Check
                                            reverse
                                            label='Indonesia'
                                            name='group1'
                                            type={type}
                                            id={`reverse-${type}-3`}
                                        />
                                    </div>
                                ))}
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

export default bahasa;
