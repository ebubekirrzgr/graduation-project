import './productAdd.scss';

import createProductAction from 'actions/createProduct';
import Header from 'components/Header';
import ProductAddForm from 'components/ProductAddForm';
import UploadImage from 'components/UploadImage';
import validate from 'helpers/productAddValidates';
import useProductAdd from 'helpers/useProductAdd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductAdd = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    category: { id: '', title: '' },
    brand: { id: '', title: '' },
    color: { id: '', title: '' },
    status: { id: '', title: '' },
    price: 0,
    imageUrl: '',
    isOfferable: false,
  });
  const dispatch = useDispatch();

  const submitForm = (item) => {
    dispatch(createProductAction(item));
  };

  const { handleChange, handleSubmit, errors } = useProductAdd(
    submitForm,
    validate,
    values
  );
  return (
    <>
      <Header />
      <div className="container">
        <div className="productAdd">
          <ProductAddForm
            handleChange={handleChange}
            values={values}
            errors={errors}
            setValues={setValues}
          />
          <UploadImage
            handleChange={handleChange}
            values={values}
            errors={errors}
            setValues={setValues}
            setSelected={(e) => setValues({ ...values, imageUrl: e })}
          />
        </div>
        <div className="submitBtn">
          <button
            className="productAddBtn"
            onClick={handleSubmit}
            type="button"
          >
            Kaydet
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
