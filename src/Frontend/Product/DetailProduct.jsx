import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import Count from '../Components/Count/Count';
import './css/detailproduct.css';

import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

const DetailProduct = () => {
    return (
        <>
            <NavbarComponents />
            <div className='w-100 min-vh-100'>
                <div className='photo-detail-page'>
                    <div className='photo-column text-center'>
                        <img
                            src='assets/img/Card/cat.png'
                            alt='Nama Foto'
                            className='custom-image'
                        />
                    </div>
                    <div className='detail-column'>
                        <h1 className='fw-bold'>Animal Series</h1>
                        <div className='rating'>
                            {/* Icon bintang */}
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span className='star'>&#9733;</span>
                            <span
                                style={{
                                    marginLeft: '10px',
                                    marginTop: '2px',
                                }}
                            >
                                100 Ulasan
                            </span>
                        </div>
                        <h2 className='fw-bold'>Harga: Rp. 30.000</h2>
                        <p>
                            Terdiri dari 24 kartu hewan unik dimana <br />
                            setiap kartu bisa di scan menggunakan <br />
                            aplikasi untuk memunculkan fitur <br />
                            Augmented Reality.
                        </p>
                        <div>
                            <div className='count-container'>
                                <Count />
                                <button className='buy-now-button'>
                                    <Link to='/beli-sekarang'>
                                        Beli Sekarang
                                    </Link>
                                </button>

                                <div className='icons-cart-like'>
                                    <div className='to-cart'>
                                        <Link to='/cart'>
                                            <AiOutlineShoppingCart />
                                        </Link>
                                    </div>

                                    <div className='my-like'>
                                        <Link to='/heart'>
                                            <AiOutlineHeart />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <p
                                style={{
                                    marginTop: '10px',
                                }}
                            >
                                Pembelian Dalam Bentuk Pack Bukan Satuan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponents />
        </>
    );
};

export default DetailProduct;
