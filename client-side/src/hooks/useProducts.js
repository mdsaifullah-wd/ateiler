import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
const useProducts = () => {
  //   const location = useLocation();
  //   const path = location.pathname;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const url = 'products.json';
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useProducts;
