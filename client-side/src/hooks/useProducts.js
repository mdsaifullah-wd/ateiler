import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useProducts = () => {
  const location = useLocation();
  const path = location.pathname;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001${path}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [path]);
  return [products, setProducts];
};
export default useProducts;
