import './product.scss';

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
      <div className="product-list">
        {products.productsData.length > 0 &&
          products.productsData.map((item) => (
            <Link to={`/ProductDetails/${item.id}`} key={item.id}>
              <div className="productList">
                <div className="productImg">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div className="productDetail">
                  <h5 className="productBrand">{item.brand.title}</h5>
                  <h5 className="productColor">
                    Renk:
                    <span className="hColor">{item.color.title}</span>
                  </h5>
                </div>
                <h5 className="productPrice">
                  {item.price
                    .toLocaleString('tr-TR', {
                      style: 'currency',
                      currency: 'TRY',
                    })
                    .slice(1)}{' '}
                  TL
                </h5>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
