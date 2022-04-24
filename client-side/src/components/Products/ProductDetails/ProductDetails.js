import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../../hooks/useProductDetails';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product] = useProductDetails(productId);
  const {
    title,
    price,
    description,
    size,
    color,
    productCode,
    available,
    image1,
  } = product;
  return (
    <div className='product-details container mt-5'>
      <div>
        <img src={image1} className='img-fluid' alt='' />
      </div>
      <div className='mt-5'>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        <p>Code: {productCode}</p>
        <p>
          Availability:{' '}
          {available ? (
            <span className='text-success'>Available in Stock</span>
          ) : (
            <span className='text-danger'>Not available in Stock</span>
          )}{' '}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
