import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductNavbar from './components/Shared/ProductNavbar/ProductNavbar';
import Products from './components/Products/Products';
import Header from './components/Shared/Header/Header';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Authentication from './components/Authentication/Authentication';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import useProducts from './hooks/useProducts';
import { addToLocalStorage, getStoredCart } from './hooks/useLocalStore';

function App() {
  const location = useLocation();

  const [cart, setCart] = useState([]);

  const { allProducts } = useProducts();
  useEffect(() => {
    const savedCart = [];
    const storedCart = getStoredCart();
    for (const id in storedCart) {
      const addedProduct = allProducts.find((product) => product._id === id);
      const quantity = storedCart[id];
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [allProducts]);

  // Handle Add to Cart
  const handleAddToCart = (id, product) => {
    const matched = cart.find((pd) => pd._id === id);
    const rest = cart.filter((pd) => pd._id !== id);
    if (matched) {
      matched.quantity += 1;
      setCart([...rest, matched]);
    } else {
      product.quantity = 1;
      setCart([...rest, product]);
    }
    addToLocalStorage(id);
  };

  return (
    <>
      <Header cart={cart} />
      {location.pathname !== '/' && <ProductNavbar />}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/products'
          element={<Products handleAddToCart={handleAddToCart} />}></Route>
        <Route
          path='/products/*'
          element={<Products handleAddToCart={handleAddToCart} />}></Route>
        <Route path='/login' element={<Authentication />}></Route>
        <Route path='/register' element={<Authentication />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route
          path='/product-details/:productId'
          element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
