import React from 'react';
import { Link } from 'react-router-dom';

const MainCategory = ({ category }) => {
  const { name } = category;
  return (
    <li>
      <Link to={`/product/${name}`}>{name.toUpperCase()}</Link>
    </li>
  );
};

export default MainCategory;
