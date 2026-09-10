import {Routes, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout/MainLayout';

import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';

function AppRoutes(){
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path='/Product/:id' element={<ProductDetails />} />
                <Route path='/Cart' element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
};

export default AppRoutes;