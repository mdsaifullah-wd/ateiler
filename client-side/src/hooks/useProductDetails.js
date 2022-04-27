import { useState, useEffect } from 'react';
const useProductDetails = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://ateiler.herokuapp.com/product-details/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};
export default useProductDetails;
