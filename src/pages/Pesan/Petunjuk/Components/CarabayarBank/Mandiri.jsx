import AccordionItem from '../AccordionItem';

const Mandiri = () => {
    return (
        <div>
            <div className='no-rekening'>
                <img src='assets/img/Pembayaran/mandiri.png' alt='' />
                <div>
                    <p>No. Rekening</p>
                    <p className='text-warning'>
                        1234567890123456
                        <span>Salin</span>
                    </p>
                </div>
            </div>
            <AccordionItem
                title='Mobile Banking (Mandiri Online)'
                content={
                    <div>
                        <ol>
                            <li>
                                Buka aplikasi Mandiri Online pada smartphone
                            </li>
                            <li>
                                Login menggunakan user ID dan password Mandiri
                                Online
                            </li>
                            <li>Pilih menu "Pembayaran" atau "Transfer</li>
                            <li>
                                Pilih jenis pembayaran atau transfer yang
                                diinginkan
                            </li>
                            <li>
                                Masukkan nomor rekening atau nomor virtual
                                account tujuan pembayaran
                            </li>
                            <li>Masukkan jumlah pembayaran</li>
                            <li>
                                Verifikasi informasi pembayaran yang ditampilkan
                            </li>
                            <li>
                                Ikuti instruksi selanjutnya untuk menyelesaikan
                                transaksi
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title=' Internet Banking Mandiri'
                content={
                    <div>
                        <ol>
                            <li>
                                Buka situs web Internet Banking Mandiri{' '}
                                <a
                                    style={{ color: 'blue ' }}
                                    href='https://ib.bri.co.id/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    (https://ibank.bankmandiri.co.id/)
                                </a>
                            </li>

                            <li>
                                Login menggunakan user ID dan password Internet
                                Banking
                            </li>
                            <li>Pilih menu "Pembayaran" atau "Transfer"</li>
                            <li>
                                Pilih jenis pembayaran atau transfer yang
                                diinginkan
                            </li>
                            <li>
                                Masukkan nomor rekening atau nomor virtual
                                account tujuan pembayaran
                            </li>
                            <li>Masukkan jumlah pembayaran</li>
                            <li>
                                Verifikasi informasi pembayaran yang ditampilkan
                            </li>
                            <li>
                                Ikuti instruksi selanjutnya untuk menyelesaikan
                                transaksi
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Transfer ATM Mandiri'
                content={
                    <div>
                        <ol>
                            <li>
                                Masukkan kartu ATM Mandiri ke dalam mesin ATM
                            </li>
                            <li>Masukkan PIN ATM</li>
                            <li>Pilih menu "Pembayaran" atau "Transfer"</li>
                            <li>
                                Pilih jenis pembayaran atau transfer yang
                                diinginkan
                            </li>
                            <li>
                                Masukkan nomor rekening atau nomor virtual
                                account tujuan pembayaran
                            </li>
                            <li>Masukkan jumlah pembayaran</li>
                            <li>
                                Verifikasi informasi pembayaran yang ditampilkan
                            </li>
                            <li>
                                Ikuti instruksi selanjutnya untuk menyelesaikan
                                transaksi
                            </li>
                        </ol>
                    </div>
                }
            />
        </div>
    );
};

export default Mandiri;
