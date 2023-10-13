import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//css
// Dalam file Sidebar.js atau file yang mengimpor Sidebar
import 'bootstrap/dist/css/bootstrap.min.css';

import '../public/css/index.css';

// frontpage
import Home from './frontpage/home';
import Status from './frontpage/status';
import About from './frontpage/about';
import Cart from './frontpage/cart';
//productpage
import DetailProduct from './product/detailproduct';
import Product from './product/product';

//pesanpage
import Pemesanan from './pesan/pemesanan';
import Pembayaran from './pesan/pembayaran';
import Petunjuk from './pesan/petunjuk';
import Selesai from './pesan/selesai';

//AuthPage
import Login from './auth/login';
import Register from './auth/register';

//Profile
import informasi from './profile/informasi';
import koleksi from './profile/koleksi';
import notifikasi from './profile/notifikasi';
import bahasa from './profile/bahasa';
import logout from './profile/logout';

import Dashboard from './dashboard/dashboard';
import Tabel from './dashboard/tabel';
import ProductDasboard from './dashboard/productdasboard';
import Post from './dashboard/post';
import Calender from './dashboard/calender';
import Customer from './dashboard/customer';
import Transaction from './dashboard/transaction';
import User from './dashboard/user';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/product' Component={Product} />
                    <Route path='/detail-product' Component={DetailProduct} />
                    <Route path='/status' Component={Status} />
                    <Route path='/about' Component={About} />
                    <Route path='/cart' Component={Cart} />
                    <Route path='/pemesanan' Component={Pemesanan} />
                    <Route path='/pembayaran' Component={Pembayaran} />
                    <Route path='/petunjuk' Component={Petunjuk} />
                    <Route path='/selesai' Component={Selesai} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/informasi' Component={informasi} />
                    <Route path='/koleksi' Component={koleksi} />
                    <Route path='/notifikasi' Component={notifikasi} />
                    <Route path='/bahasa' Component={bahasa} />
                    <Route path='/logout' Component={logout} />
                    <Route path='/dashboard' Component={Dashboard} />
                    <Route path='/tabel' Component={Tabel} />
                    <Route
                        path='/product-dashboard'
                        Component={ProductDasboard}
                    />
                    <Route path='/post' Component={Post} />
                    <Route path='/calender' Component={Calender} />
                    <Route path='/customer' Component={Customer} />
                    <Route path='/transaction' Component={Transaction} />
                    <Route path='/user' Component={User} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
