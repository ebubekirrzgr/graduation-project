import './productAdd.scss';

import Header from 'components/Header';
import ProductAddForm from 'components/ProductAddForm';
import React from 'react';

const ProductAdd = () => {
  console.log('sa');
  return (
    <>
      <Header />
      <div className="container">
        <div className="productAdd">
          <ProductAddForm />
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
