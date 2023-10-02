import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//css
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
                </Routes>
            </Router>
        </>
    );
}

export default App;
