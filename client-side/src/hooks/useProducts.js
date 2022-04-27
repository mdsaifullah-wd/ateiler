import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [productPerPage, setProductPerPage] = useState(20);
  const [selectedPage, setSelectedPage] = useState(0);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const url = `https://ateiler.herokuapp.com${path}?page=${selectedPage}&products=${productPerPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [path, selectedPage, productPerPage]);
  useEffect(() => {
    setSelectedPage(0);
    const url = `https://ateiler.herokuapp.com${path}/count`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const totalProducts = data.result;
        setPages(Math.ceil(totalProducts / productPerPage));
      });
  }, [path, productPerPage]);

  // Fetch All product only for cart(will be optimized later)
  useEffect(() => {
    const url = `https://ateiler.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  //...................
  const handlePageChange = (number) => {
    setSelectedPage(number);
  };
  const handleProductPerPage = (e) => {
    setProductPerPage(parseInt(e.target.value));
  };
  const handlePrevPage = () => {
    if (selectedPage > 0) {
      setSelectedPage(selectedPage - 1);
    }
  };
  const handleNextPage = () => {
    if (selectedPage + 1 < pages) {
      setSelectedPage(selectedPage + 1);
    }
  };
  return {
    products,
    setProducts,
    pages,
    setPages,
    productPerPage,
    setProductPerPage,
    selectedPage,
    setSelectedPage,
    handlePageChange,
    handleProductPerPage,
    handlePrevPage,
    handleNextPage,
    allProducts,
    setAllProducts,
  };
};
export default useProducts;
