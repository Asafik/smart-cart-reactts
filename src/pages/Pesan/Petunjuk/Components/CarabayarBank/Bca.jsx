import AccordionItem from '../AccordionItem';

const Bca = () => {
    return (
        <div>
            <div className='no-rekening'>
                <img src='assets/img/Pembayaran/bca.png' alt='' />
                <div>
                    <p>No. Rekening</p>
                    <p className='text-warning'>
                        1234567890123456
                        <span>Salin</span>
                    </p>
                </div>
            </div>
            <AccordionItem
                title='Mobile Banking (m-Banking BCA)'
                content={
                    <div>
                        <ol>
                            <li>Buka aplikasi BCA Mobile pada smartphone.</li>
                            <li>
                                Login menggunakan user ID dan password
                                m-Banking.
                            </li>
                            <li>Pilih menu "Pembayaran" atau "Transfer".</li>
                            <li>
                                Pilih jenis pembayaran atau transfer yang
                                diinginkan.
                            </li>
                            <li>
                                Masukkan nomor rekening atau nomor virtual
                                account tujuan pembayaran.
                            </li>
                            <li>Masukkan jumlah pembayaran.</li>
                            <li>
                                Verifikasi informasi pembayaran yang
                                ditampilkan.
                            </li>
                            <li>
                                Ikuti instruksi selanjutnya untuk menyelesaikan
                                transaksi.
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title=' Internet Banking BCA'
                content={
                    <div>
                        <ol>
                            <li>
                                Buka situs web Internet Banking BCA{' '}
                                <a
                                    style={{ color: 'blue ' }}
                                    href='https://ib.bri.co.id/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    (https://ibank.klikbca.com/).
                                </a>
                            </li>
                            <li>
                                Login menggunakan user ID dan password Internet
                                Banking.
                            </li>
                            <li>Pilih menu "Pembayaran" atau "Transfer".</li>
                            <li>
                                Pilih jenis pembayaran atau transfer yang
                                diinginkan.
                            </li>
                            <li>
                                Masukkan nomor rekening atau nomor virtual
                                account tujuan pembayaran.
                            </li>
                            <li>Masukkan jumlah pembayaran.</li>
                            <li>
                                Verifikasi informasi pembayaran yang
                                ditampilkan.
                            </li>
                            <li>
                                Ikuti instruksi selanjutnya untuk menyelesaikan
                                transaksi.
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Transfer ATM BCA'
                content={
                    <div>
                        <ol>
                            <li>Masukkan kartu ATM BCA ke dalam mesin ATM</li>
                            <li>Masukkan PIN ATM</li>
                            <li>Pilih menu "Transfer" atau "Pembayaran"</li>
                            <li>
                                Pilih jenis pembayaran yang diinginkan, misalnya
                                "Pembayaran Tagihan" atau "Transfer ke Bank Lain
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
                                transaks
                            </li>
                        </ol>
                    </div>
                }
            />
        </div>
    );
};

export default Bca;
