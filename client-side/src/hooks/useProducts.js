import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [productPerPage, setProductPerPage] = useState(12);
  const [selectedPage, setSelectedPage] = useState(0);
  const location = useLocation();
  const path = location.pathname;
  console.log(productPerPage);
  useEffect(() => {
    const url = `http://localhost:3001${path}?page=${selectedPage}&products=${productPerPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [path, selectedPage, productPerPage]);
  useEffect(() => {
    setSelectedPage(0);
    const url = `http://localhost:3001${path}/count`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const totalProducts = data.result;
        setPages(Math.ceil(totalProducts / productPerPage));
      });
  }, [path, productPerPage]);

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
  };
};
export default useProducts;
