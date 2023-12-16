import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './infoproduct.css';

const InfoProduct = () => {
    return (
        <div className='info-product'>
            <form>
                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productName'>Nama Produk:</label>
                    </Col>
                    <Col>
                        <input
                            type='text'
                            className='form-control no-border-radius-right'
                            id='productName'
                            placeholder='Masukkan nama produk'
                        />
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col sm={2}>
                        <label htmlFor='productDescription'>Deskripsi:</label>
                    </Col>
                    <Col>
                        <textarea
                            className='form-control no-border-radius-right'
                            id='productDescription'
                            rows='3'
                            placeholder='Masukkan deskripsi produk'
                        />
                    </Col>
                </Row>
            </form>

            <div className='info-button-save'>
                <button className='custom-button'>Simpan</button>
                <button className='custom-button'>Simpan & Pratinjau</button>
            </div>
        </div>
    );
};

export default InfoProduct;
