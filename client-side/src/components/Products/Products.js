import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product/Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useProducts();
  console.log(products);
  return (
    <div className='product-container container'>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
