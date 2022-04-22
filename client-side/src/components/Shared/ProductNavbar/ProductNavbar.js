import React from 'react';
import { Link } from 'react-router-dom';
import useMainCategories from '../../../hooks/useMainCategory';
import MainCategory from './MainCategory/MainCategory';
import './ProductNavbar.css';
const ProductNavbar = () => {
  const [mainCategories, setMainCategories] = useMainCategories();
  return (
    <section id='product-categories'>
      <div className='main-categories'>
        <div className='container'>
          <ul className='main'>
            <li>
              <Link to='/products'>All</Link>
            </li>
            {mainCategories.map((category) => (
              <MainCategory key={category._id} category={category} />
            ))}
          </ul>
        </div>
      </div>
      <div className='sub-categories'>
        <div className='container'></div>
      </div>
    </section>
  );
};
export default ProductNavbar;
