import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import WrapperProducts from './scProducts';

const Products = ({
  id,
  brand,
  color,
  owner,
  category,
  title,
  imageUrl,
  description,
  isSold,
  price,
}) => {
  const dispatch = useDispatch();

  const clgProducts = () => {
    dispatch(
      clgProducts({
        id,
        brand,
        color,
        owner,
        category,
        title,
        imageUrl,
        description,
        isSold,
        price,
      })
    );
  };

  return (
    <WrapperProducts>
      <h2>{id}</h2>
      <h2>{brand}</h2>
      <h2>{color}</h2>
      <h2>{owner}</h2>
      <h2>{category}</h2>
      <h2>{title}</h2>
      <img src={imageUrl} alt={brand} />
      <h2>{description}</h2>
      <h2>{isSold}</h2>
      <h2>{price}</h2>
      <button type="button" onClick={clgProducts}>
        CLG
      </button>
    </WrapperProducts>
  );
};
const propShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

Products.propTypes = {
  brand: propShape.isRequired,
  category: propShape.isRequired,
  color: propShape.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  status: propShape.isRequired,
  isSold: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}.isRequired;

export default Products;
