import React from 'react';
import { Link } from 'react-router-dom';

const MainCategory = ({ category }) => {
  const { name, productCategory } = category;
  const productCategories = Object.keys(productCategory);
  return (
    <li className='position-relative'>
      <Link to={`/products/${name}`}>{name.toUpperCase()}</Link>
      <ul className='position-absolute bg-white sub-menu p-3'>
        {productCategories.map((category) => (
          <li className='my-3'>
            <Link
              className='text-decoration-none product-category'
              to={`/products/${name}/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MainCategory;
