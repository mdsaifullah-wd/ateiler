import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useProducts = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001${path}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [path]);
  return [products, setProducts];
};
export default useProducts;
