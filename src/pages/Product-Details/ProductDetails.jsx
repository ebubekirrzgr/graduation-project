import './productDetails.scss';

import Header from 'components/Header';
import ProductDetail from 'components/ProductDetail';
import React from 'react';

const ProductDetails = () => (
  <>
    <Header />
    <div className="container">
      <ProductDetail />
    </div>
  </>
);

export default ProductDetails;
