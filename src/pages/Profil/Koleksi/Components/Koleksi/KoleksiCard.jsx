// KoleksiCard.js
import AccordionItem from '../AccordionItem';
import './koleksicard.css';

const KoleksiCard = () => {
    return (
        <div className='koleksi-card'>
            <h2>Koleksi Saya</h2>
            <AccordionItem
                title={
                    <span>
                        <img src='assets/img/kelas/kelas-1.png' alt='Icon' />
                        Singa (Lion){' '}
                    </span>
                }
                content={
                    <div>
                        <p>
                            Singa adalah spesies hewan dari keluarga felidae
                            atau keluarga kucing. Singa berada di benua Afrika
                            dan sebagian di wilayah India. Singa merupakan hewan
                            yang hidup berkelompok. Biasanya terdiri dari seekor
                            jantan & banyak betina. Kelompok ini menjaga daerah
                            kekuasaannya.
                        </p>
                    </div>
                }
                textseri={<p>Seri Hewan</p>}
            />
            <AccordionItem
                title={
                    <span>
                        <img src='assets/img/kelas/kelas-1.png' alt='Icon' />
                        Anjing (Dog){' '}
                    </span>
                }
                content={
                    <div>
                        <p>
                            Singa adalah spesies hewan dari keluarga felidae
                            atau keluarga kucing. Singa berada di benua Afrika
                            dan sebagian di wilayah India. Singa merupakan hewan
                            yang hidup berkelompok. Biasanya terdiri dari seekor
                            jantan & banyak betina. Kelompok ini menjaga daerah
                            kekuasaannya.
                        </p>
                    </div>
                }
                textseri={<p>Seri Hewan</p>}
            />
            <AccordionItem
                title={
                    <span>
                        <img src='assets/img/kelas/kelas-1.png' alt='Icon' />
                        Kucing (Cat){' '}
                    </span>
                }
                content={
                    <div>
                        <p>
                            Singa adalah spesies hewan dari keluarga felidae
                            atau keluarga kucing. Singa berada di benua Afrika
                            dan sebagian di wilayah India. Singa merupakan hewan
                            yang hidup berkelompok. Biasanya terdiri dari seekor
                            jantan & banyak betina. Kelompok ini menjaga daerah
                            kekuasaannya.
                        </p>
                    </div>
                }
                textseri={<p>Seri Hewan</p>}
            />
            <AccordionItem
                title={
                    <span>
                        <img src='assets/img/kelas/kelas-1.png' alt='Icon' />
                        Gajah (Elephant){' '}
                    </span>
                }
                content={
                    <div>
                        <p>
                            Singa adalah spesies hewan dari keluarga felidae
                            atau keluarga kucing. Singa berada di benua Afrika
                            dan sebagian di wilayah India. Singa merupakan hewan
                            yang hidup berkelompok. Biasanya terdiri dari seekor
                            jantan & banyak betina. Kelompok ini menjaga daerah
                            kekuasaannya.
                        </p>
                    </div>
                }
                textseri={<p>Seri Hewan</p>}
            />
        </div>
    );
};

export default KoleksiCard;
