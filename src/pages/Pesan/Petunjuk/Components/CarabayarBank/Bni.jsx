import AccordionItem from '../AccordionItem';

const Bni = () => {
    return (
        <div>
            <div className='no-rekening'>
                <img src='assets/img/Pembayaran/bni.png' alt='' />
                <div>
                    <p>No. Rekening</p>
                    <p className='text-warning'>
                        8088 081 1432 3456
                        <span>Salin</span>
                    </p>
                </div>
            </div>
            <AccordionItem
                title='Petunjuk Transfer iBanking'
                content={
                    <div>
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
                                <span className='fw-bold'>TRANSFER</span>{' '}
                                kemudian klik pada pilihan{' '}
                                <span className='fw-bold'>
                                    VIRTUAL ACCOUNT BILLING
                                </span>
                            </li>
                            <li>
                                Masukkan nomor virtual account yang dituju dan
                                pilih rekening yang akan digunakan untuk
                                membayar
                            </li>
                            <li>
                                Jumlah tagihan akan muncul pada layar
                                konfirmasi. Jika sudah cocok, lanjutkan
                                transaksi
                            </li>
                            <li>Masukkan token atau Kode Otentikasi Token</li>
                            <li>
                                Jika transaksi sukses, Anda akan memperoleh
                                notifikasi.
                            </li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Transfer mBanking '
                content={
                    <div>
                        <ol>
                            <li>
                                Akses BNI Mobile Banking dari handphone dan
                                masukkan User ID serta password.
                            </li>
                            <li>
                                Pilih menu{' '}
                                <span className='fw-bold'>TRANSFER</span>.
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
                                Tagihan yang harus dibayarkan akan muncul pada
                                layar konfirmasi.
                            </li>
                            <li>
                                Konfirmasi transaksi dan masukkan Password
                                Transaksi.
                            </li>
                            <li>Pembayaran Anda Telah Berhasil.</li>
                        </ol>
                    </div>
                }
            />
            <AccordionItem
                title='Petunjuk Transfer ATM'
                content={
                    <div>
                        <ol>
                            <li>Masukkan Kartu Anda.</li>
                            <li>Pilih Bahasa.</li>
                            <li>Masukkan PIN ATM Anda.</li>
                            <li>
                                Pilih{' '}
                                <span className='fw-bold'>MENU LAINYA</span>.
                            </li>
                            <li>
                                Pilih <span className='fw-bold'>TRANFER</span>.
                            </li>
                            <li>
                                Pilih Jenis rekening yang akan Anda gunakan
                                Contoh; "Dari Rekening Tabungan".
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
                                Tagihan yang harus dibayarkan akan muncul pada
                                layar konfirmasi.
                            </li>
                            <li>
                                Konfirmasi, apabila telah sesuai, lanjutkan
                                transaksi.
                            </li>
                            <li>Transaksi Anda telah selesai.</li>
                        </ol>
                    </div>
                }
            />
        </div>
    );
};

export default Bni;
