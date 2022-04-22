import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Header from './components/Shared/Header/Header';
import ProductNavigation from './components/Shared/ProductNagivation/ProductNavigation';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname !== '/' && <ProductNavigation />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:category' element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
