import { Navbar, Container, Row, Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import FooterComponents from '../Components/FooterComponents';

const CaraBayar = () => {
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
                        <div className='check-container'>
                            <img src='assets/img/icon/check.png' alt='' />
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
            <Container>
                <Row className='min-vh-100'>
                    <div className='cara-pembayaran'>
                        <div className='text-indent'>
                            <h5 className='fw-bold'>Pembayaran</h5>
                        </div>
                        <hr />
                        <div className='cara-pembayaran-bank'>
                            <Link to='/tujuan-sebelumnya'>
                                <FaChevronLeft className='chevron-icon text-dark' />
                            </Link>
                            <div className='total-bayar-text'>
                                <p>Total Pembayaran</p>
                                <p>Bayar Dalam</p>
                            </div>
                            <div className='right-align'>
                                <p className='text-warning'>Rp. 60.000</p>

                                <p className='text-warning'>
                                    23 jam 55 menit 40 detik
                                </p>
                                <p className='tempo'>
                                    Jatuh tempo 10 Ags 2023, 09:46
                                </p>
                            </div>
                        </div>

                        <div className='no-rekening'>
                            <img src='assets/img/Pembayaran/bni.png' alt='' />
                            <div>
                                <p>No. Rekening</p>
                                <p className='text-warning'>
                                    8088 081 1432 3456{' '}
                                    <span className='text-dark'>Salin</span>
                                </p>
                            </div>
                        </div>
                        <Accordion className='custom-accordion'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    Petunjuk Transfer mBanking
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>
                                            Akses BNI Mobile Banking dari
                                            handphone dan masukkan User ID serta
                                            password.
                                        </li>
                                        <li>
                                            Pilih menu{' '}
                                            <span className='fw-bold'>
                                                TRANSFER
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            Pilih menu{' '}
                                            <span className='fw-bold'>
                                                VIRTUAL ACCOUNT BILLING
                                            </span>{' '}
                                            dan pilih rekening debet.
                                        </li>
                                        <li>
                                            Masukkan nomor Virtual Account Anda{' '}
                                            <span className='fw-bold'>
                                                8088 081 1432 3456
                                            </span>{' '}
                                            pada menu "Input Baru".
                                        </li>
                                        <li>
                                            Tagihan yang harus dibayarkan akan
                                            muncul pada layar konfirmasi.
                                        </li>
                                        <li>
                                            Konfirmasi transaksi dan masukkan
                                            Password Transaksi.
                                        </li>
                                        <li>Pembayaran Anda Telah Berhasil.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Petunjuk Transfer iBanking
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>
                                            Buka browser kemudian akses{' '}
                                            <a href='' className='text-primary'>
                                                ibank.bni.co.id
                                            </a>
                                        </li>
                                        <li>Isi kolom user ID dan password</li>
                                        <li>
                                            Pilih menu{' '}
                                            <span className='fw-bold'>
                                                TRANSFER
                                            </span>{' '}
                                            kemudian klik pada pilihan{' '}
                                            <span className='fw-bold'>
                                                VIRTUAL ACCOUNT BILLING
                                            </span>
                                        </li>
                                        <li>
                                            Masukkan nomor virtual account yang
                                            dituju dan pilih rekening yang akan
                                            digunakan untuk membayar
                                        </li>
                                        <li>
                                            Jumlah tagihan akan muncul pada
                                            layar konfirmasi. Jika sudah cocok,
                                            lanjutkan transaksi
                                        </li>
                                        <li>
                                            Masukkan token atau Kode Otentikasi
                                            Token
                                        </li>
                                        <li>
                                            Jika transaksi sukses, Anda akan
                                            memperoleh notifikasi.
                                        </li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Petunjuk Transfer ATM
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>Masukkan Kartu Anda.</li>
                                        <li>Pilih Bahasa.</li>
                                        <li>Masukkan PIN ATM Anda.</li>
                                        <li>
                                            Pilih{' '}
                                            <span className='fw-bold'>
                                                MENU LAINYA
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            Pilih{' '}
                                            <span className='fw-bold'>
                                                TRANFER
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            Pilih Jenis rekening yang akan Anda
                                            gunakan Contoh; "Dari Rekening
                                            Tabungan".
                                        </li>
                                        <li>
                                            Pilih{' '}
                                            <span className='fw-bold'>
                                                VIERTUAL ACOOUNT BILLING
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            Masukkan nomor Virtual Account Anda{' '}
                                            <span className='fw-bold'>
                                                8088 081 1432 3456
                                            </span>
                                        </li>
                                        <li>
                                            Tagihan yang harus dibayarkan akan
                                            muncul pada layar konfirmasi.
                                        </li>
                                        <li>
                                            Konfirmasi, apabila telah sesuai,
                                            lanjutkan transaksi.
                                        </li>
                                        <li>Transaksi Anda telah selesai.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className='centered-container'>
                            <Link
                                to='/selesai'
                                className='OK text-white link-box'
                            >
                                OK
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
            <FooterComponents />
        </>
    );
};

export default CaraBayar;
