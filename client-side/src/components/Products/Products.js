import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product/Product';
import './Products.css';

const Products = () => {
  const {
    products,
    pages,
    selectedPage,
    handlePageChange,
    handleProductPerPage,
    handlePrevPage,
    handleNextPage,
  } = useProducts();

  console.log();

  return (
    <>
      <div className='product-container container mt-5'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className='container p-5'>
        <div className='mx-auto d-flex justify-content-center gap-3'>
          <button className='btn btn-info' onClick={() => handlePrevPage()}>
            Prev
          </button>

          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => handlePageChange(number)}
              key={number}
              className={`btn ${
                selectedPage === number ? 'btn-warning' : 'btn-primary'
              }`}>
              {number + 1}
            </button>
          ))}
          <button className='btn btn-info' onClick={() => handleNextPage()}>
            Next
          </button>
          <div className='form-group'>
            <select onChange={handleProductPerPage} className='form-control'>
              <option value='12'>12</option>
              <option value='18'>18</option>
              <option value='24'>24</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
