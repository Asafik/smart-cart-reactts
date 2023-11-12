import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';

const NavbarComponents = () => {
    // useLocation dari react-router-dom digunakan untuk mendapatkan lokasi saat ini dari aplikasi
    const location = useLocation();

    return (
        <>
            <Navbar expand='lg' className='navbar-bg fixed-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src='assets/img/logo.png' alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mx-auto'>
                            <Nav.Link
                                as={Link}
                                to='/'
                                className={
                                    location.pathname === '/' ? 'active' : ''
                                }
                            >
                                Beranda
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to='/produk'
                                className={
                                    location.pathname === '/produk'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Produk
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to='/tentang-kami'
                                className={
                                    location.pathname === '/tentang-kami'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Tentang Kami
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to='/cek-status'
                                className={
                                    location.pathname === '/cek-status'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Cek Status Pesanan
                            </Nav.Link>
                        </Nav>
                        <Link
                            to='/login'
                            className='btn btn-warning text-white fw-bold'
                        >
                            Masuk
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponents;
