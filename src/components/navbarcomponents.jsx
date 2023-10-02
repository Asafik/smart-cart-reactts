import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const navbarcomponents = () => {
    return (
        <>
            <Navbar expand='lg' className='bg-body-tertiary fixed-top'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src='assets/img/logo.png' alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mx-auto'>
                            <Nav.Link href='/'>Beranda</Nav.Link>
                            <Nav.Link href='/product'>Produk</Nav.Link>
                            <Nav.Link href='/about'>Tentang Kami</Nav.Link>
                            <Nav.Link href='/status'>
                                Cek Status Pesanan
                            </Nav.Link>
                        </Nav>
                        <div className='navbar-icons'>
                            <Link to='/cart'>
                                <div className='icon-box'>
                                    <FaShoppingCart />
                                </div>
                            </Link>
                            <Link to='/login'>
                                <div className='icon-box'>
                                    <FaUser />
                                </div>
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default navbarcomponents;
