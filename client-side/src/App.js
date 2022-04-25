import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductNavbar from './components/Shared/ProductNavbar/ProductNavbar';
import Products from './components/Products/Products';
import Header from './components/Shared/Header/Header';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname !== '/' && <ProductNavbar />}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/*' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route
          path='/product-details/:productId'
          element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
