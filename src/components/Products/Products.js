import PropTypes from 'prop-types';
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
    dispatch(clgProducts({ id, brand, color }));
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

Products.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSold: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
