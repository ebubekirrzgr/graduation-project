import './product.scss';

import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import fetchProducts from '../../actions/products';

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.productsData.length]);

  if (products.isFetching) return <div>Loading</div>;
  if (products.isError) return <div>Error</div>;

  return (
    <div>
      <Header />
      <h1>ProductList</h1>
      <div className="product-list">
        {products.productsData.length > 0 &&
          products.productsData.map((item) => (
            <div className="productList" key={item.id}>
              <Link to={`/product/${item.id}`}> {item.title}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
