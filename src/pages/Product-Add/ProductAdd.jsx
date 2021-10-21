import './productAdd.scss';

import Header from 'components/Header';
import ProductAddForm from 'components/ProductAddForm';
import UploadImage from 'components/UploadImage';
import React from 'react';

const ProductAdd = () => {
  console.log('sa');
  return (
    <>
      <Header />
      <div className="container">
        <div className="productAdd">
          <ProductAddForm />
          <UploadImage />
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
