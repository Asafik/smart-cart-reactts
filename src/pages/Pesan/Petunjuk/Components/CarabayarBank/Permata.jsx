import AccordionItem from '../AccordionItem';

const Permata = () => {
    return (
        <div>
            <div className='no-rekening'>
                <img src='assets/img/Pembayaran/permata.png' alt='' />
                <div>
                    <p>No. Rekening</p>
                    <p className='text-warning'>
                        1234567890123456
                        <span>Salin</span>
                    </p>
                </div>
            </div>
            <AccordionItem
                title='Mobile Banking (Permata Mobile)'
                content={
                    <div>
                        <ol>
                            <li>Buka aplikasi PermataMobile pada smartphone</li>
                            <li>
                                Login menggunakan user ID dan password
                                PermataMobile
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
                title=' Internet Banking Permata'
                content={
                    <div>
                        <ol>
                            <li>
                                Buka situs web Internet Banking Permata{' '}
                                <a
                                    style={{ color: 'blue ' }}
                                    href='https://ib.bri.co.id/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    (https://ibank.permatabank.com/)
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
                title='Petunjuk Transfer ATM Permata'
                content={
                    <div>
                        <ol>
                            <li>
                                Masukkan kartu ATM Permata ke dalam mesin ATM
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

export default Permata;
