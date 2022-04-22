import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductNavbar from './components/Shared/ProductNavbar/ProductNavbar';
import Products from './components/Products/Products';
import Header from './components/Shared/Header/Header';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname !== '/' && <ProductNavbar />}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/*' element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
