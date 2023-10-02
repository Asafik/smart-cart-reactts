import { Container, Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

//Components
import NavbarComponents from '../components/navbarcomponents';
import FooterComponents from '../components/footercomponents';


const about = () => {
    return (
        <>
            <NavbarComponents/>
            <div className='w-100 min-vh-100 d-flex'>
                    <div className='about'>
                        <Container>
                            <Row>
                                <Col>
                                    <h3>
                                        Animal Smart Card <br />
                                        Menggunakan Teknologi <br />
                                        Augmented Reality
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit,<br />
                                         sed do eiusmod tempor
                                        incididunt ut labore Ut enim ad <br />
                                         minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris <br />
                                         nisi ut aliquip ex ea
                                        commodo con. Duis aute irure dolor <br />
                                         in .
                                    </p>    
                                </Col>
                                <Col>
                                    <img src='assets/img/boxcard.png' alt='' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                    <Container className='about-two'>
                        <Row>
                            <h1>Belajar Lebih Mudah <br /> Dengan smart Card</h1>
                            <Col>
                            <img src='assets/img/Card/card.png' alt='' />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
            <FooterComponents/>
        </>
    )
};

export default about;
