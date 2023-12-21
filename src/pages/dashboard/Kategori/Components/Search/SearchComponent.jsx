import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'; // Menggunakan ikon pencarian dari React Icons
import './SearchComponent.css'; // Impor file CSS terpisah

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // Anda juga bisa menambahkan logika pencarian di sini
        // Misalnya, Anda mungkin ingin menyaring daftar produk berdasarkan kata kunci pencarian
    };

    return (
        <div className='search-container'>
            <div className='search-wrapper'>
                <input
                    type='text'
                    placeholder='Cari Kategori'
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <BsSearch className='search-icon' />
            </div>
        </div>
    );
};

export default SearchComponent;
