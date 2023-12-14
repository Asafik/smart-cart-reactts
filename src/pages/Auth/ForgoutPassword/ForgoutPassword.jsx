import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <Container className='forgot-password-container'>
            <Row className='justify-content-md-center align-items-center'>
                <Col md={6} className='forgot-password-form'>
                    <Image
                        src='assets/img/logo.png'
                        alt='Logo'
                        className='logo-image'
                    />
                    <h2>Lupa Kata Sandi Anda ?</h2>
                    <p>
                        Masukkan alamat email anda, kami akan mengirimkan <br />{' '}
                        anda tautan untuk mengatur ulang kata sandi anda
                    </p>
                    <Form className='inputan-forgout-password'>
                        <Form.Group controlId='formEmail'>
                            <div className='input-with-icon'>
                                <AiOutlineMail className='icon-forgout-' />
                                <Form.Control type='email' required />
                            </div>
                        </Form.Group>

                        <Button>Kirim</Button>
                    </Form>

                    <Link to='/login' className='link-to-login'>
                        Kembali Ke Halaman Masuk
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
