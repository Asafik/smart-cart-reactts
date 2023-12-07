import AccordionItem from '../AccordionItem';

const Bri = () => {
    return (
        <div>
            <div className='no-rekening'>
                <img src='assets/img/Pembayaran/bri.png' alt='' />
                <div>
                    <p>No. Rekening</p>
                    <p className='text-warning'>
                        88810 081098765432
                        <span>Salin</span>
                    </p>
                </div>
            </div>
            <AccordionItem
                title='Petunjuk Dengan Brimo'
                content={
                    <div>
                        <p>
                            Berikut merupakan langkah-langkah pembayaran melalui
                            BRImo
                        </p>
                        <ol>
                            <li>
                                Login pada aplikasi BRImo (masukan Username dan
                                Password)
                            </li>
                            <li>Pilih menu BRIVA</li>
                            <li>
                                Pilih sumber dana kemudian masukan Kode BRIVA
                                untuk pembayaran tagihan Anda yang akan
                                dibayarkan.
                            </li>
                            <li>
                                Pada halaman konfirmasi, pastikan detail
                                pembayaran sudah sesuai (nomor BRIVA dan jumlah
                                pembayaran)
                            </li>
                            <li>
                                Ikuti instruksi untuk menyelesaikan transaksi
                            </li>
                            <li>
                                Simpan bukti transaksi sebagai bukti pembayaran
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Internet Banking BRI '
                content={
                    <div>
                        <ol>
                            <li>
                                Login pada alamat Internet Banking BRI{' '}
                                <a
                                    style={{ color: 'blue ' }}
                                    href='https://ib.bri.co.id/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    (https://ib.bri.co.id/)
                                </a>
                                Masukan Username dan Password
                            </li>
                            <li>
                                Pilih menu Pembayaran{' '}
                                <span className='fw-bold'>BRIVA</span>
                            </li>
                            <li>
                                Pada halaman konfirmasi, pastikan detail
                                pembayaran sudah sesuai (nomor BRIVA dan jumlah
                                pembayaran)
                            </li>
                            <li>
                                Ikuti instruksi untuk menyelesaikan transaksi
                            </li>
                            <li>
                                Simpan resi transaksi sebagai bukti pembayaran
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Transfer ATM BRI'
                content={
                    <div>
                        <ol>
                            <li>Masukan kartu ATM dan PIN BRI Anda</li>
                            <li>
                                Pilih menu Transaksi Lain{' '}
                                <span className='fw-bold'>
                                    'Pembayaran' 'Lainnya' 'BRIVA'
                                </span>
                            </li>
                            <li>
                                Masukan Kode BRIVA untuk pembayaran tagihan Anda
                                yang akan dibayarkan.
                            </li>
                            <li>
                                Pada halaman konfirmasi, pastikan detail
                                pembayaran sudah sesuai (nomor BRIVA dan jumlah
                                pembayaran)
                            </li>
                            <li>
                                Ikuti instruksi untuk menyelesaikan transaksi
                            </li>
                            <li>
                                Simpan struk transaksi sebagai bukti pembayaran
                            </li>
                        </ol>
                    </div>
                }
            />
        </div>
    );
};

export default Bri;
