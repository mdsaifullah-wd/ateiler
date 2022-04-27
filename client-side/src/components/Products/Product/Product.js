import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
const Product = ({ product }) => {
  const { _id, image1, title, price } = product;
  const navigate = useNavigate();
  const handleSeeDetails = (id) => {
    navigate(`/product-details/${id}`);
  };
  const { handleAddToCart } = useCart();
  return (
    <>
      <Card>
        <Card.Img variant='top' src={image1} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant='primary' onClick={() => handleSeeDetails(_id)}>
            See details
          </Button>
          <Button variant='dark' onClick={() => handleAddToCart(_id, product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
