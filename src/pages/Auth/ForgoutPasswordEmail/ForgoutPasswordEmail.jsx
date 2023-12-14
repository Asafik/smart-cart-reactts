import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgoutPasswordEmail.css'; // Sesuaikan dengan nama file CSS Anda

const ForgoutPasswordEmail = () => {
    return (
        <Container className='forgot-password-container'>
            <Row className='justify-content-md-center align-items-center'>
                <Col md={6} className='forgot-password-form'>
                    <Image
                        src='assets/img/logo.png'
                        alt='Logo'
                        className='logo-image'
                    />
                    <h2>Periksa Email Anda !</h2>
                    <p>
                        kami baru saja mengirimi anda email berisi <br />{' '}
                        instruksi untuk mengatur ulang kata sandi anda
                    </p>

                    <hr />
                    <p>
                        untuk pertanyaan atau masalah apa pun,
                        <br /> silakan kirim email kepada kami di
                    </p>
                    <Link to='' className='help-email'>
                        help.smartcard@gmail.com
                    </Link>
                    <Button>Selesai</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgoutPasswordEmail;
