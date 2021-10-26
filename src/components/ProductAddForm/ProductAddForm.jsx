/* eslint-disable react/prop-types */
import './productAddForm.scss';

import fetchBrands from 'actions/brands';
import fetchCategories from 'actions/categories';
import fetchColors from 'actions/colors';
import fetchStatus from 'actions/status';
import Dropdown from 'components/Dropdown';
import ToogleSwitch from 'components/ToggleSwitch';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductAddForm = ({ handleChange, values, errors, setValues }) => {
  const categories = useSelector((state) => state.categories);
  const colors = useSelector((state) => state.colors);
  const brands = useSelector((state) => state.brands);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.categoriesData.length === 0 && !categories.isFetching) {
      dispatch(fetchCategories());
    }
    if (colors.colorsData.length === 0 && !colors.isFetching) {
      dispatch(fetchColors());
    }
    if (brands.brandsData.length === 0 && !brands.isFetching) {
      dispatch(fetchBrands());
    }
    if (status.statusData.length === 0 && !status.isFetching) {
      dispatch(fetchStatus());
    }
  }, [
    brands.brandsData.length,
    brands.isFetching,
    categories.categoriesData.length,
    categories.isFetching,
    categories.length,
    colors.colorsData.length,
    colors.isFetching,
    dispatch,
    status.isFetching,
    status.statusData.length,
  ]);
  return (
    <div className="productAddForm">
      <h1 className="productAddDetail">Ürün Detayları</h1>
      <div className="productAddForm__productName">
        <h2>Ürün Adı</h2>
        <input
          name="title"
          type="text"
          placeholder="Örnek: Iphone 12 Pro Max"
          onChange={(e) => {
            setValues({ ...values, title: e.target.value });
            handleChange();
          }}
          value={values.title}
          className={errors.title && 'errorInput'}
        />
        <p className="errorMessage">{errors?.title}</p>
      </div>
      <div className="productAddForm__productDescription">
        <h2>Ürün Açıklaması</h2>
        <textarea
          placeholder="Ürün açıklaması girin"
          name="description"
          id="productName"
          cols="20"
          rows="5"
          onChange={(e) => {
            setValues({ ...values, description: e.target.value });
            handleChange();
          }}
          value={values.description}
          className={errors.description && 'errorTextArea'}
        >
          {}
        </textarea>
        <p className="errorMessage">{errors?.description}</p>
      </div>

      <div className="productDropdown1">
        <div className="productCategory">
          <h2 className="dropdownH">Kategori</h2>
          <Dropdown
            setDropdown={(e) => setValues({ ...values, category: e })}
            name="category"
            options={categories.categoriesData}
            title="Kategori Seç"
            handleChange={handleChange}
            value={values.category}
            className={
              errors.category
                ? 'dropdown-select errorDropdown'
                : 'dropdown-select'
            }
          />
          <p className="errorMessage">{errors?.category}</p>
        </div>
        <div className="productBrand">
          <h2 className="dropdownH">Marka</h2>
          <Dropdown
            setDropdown={(e) => setValues({ ...values, brand: e })}
            name="brand"
            options={brands.brandsData}
            title="Marka Seç"
            handleChange={handleChange}
            value={values.brand}
            className={
              errors.brand ? 'dropdown-select errorDropdown' : 'dropdown-select'
            }
          />
          <p className="errorMessage">{errors?.brand}</p>
        </div>
      </div>

      <div className="productDropdown2">
        <div className="productColor">
          <h2 className="dropdownH">Renk</h2>
          <Dropdown
            setDropdown={(e) => setValues({ ...values, color: e })}
            name="color"
            options={colors.colorsData}
            handleChange={handleChange}
            value={values.color}
            title="Renk Seç"
            className={
              errors.color ? 'dropdown-select errorDropdown' : 'dropdown-select'
            }
          />
          <p className="errorMessage">{errors?.color}</p>
        </div>
        <div className="productStatus">
          <h2 className="dropdownH">Kullanım Durumu</h2>
          <Dropdown
            setDropdown={(e) => setValues({ ...values, status: e })}
            name="status"
            options={status.statusData}
            title="Kullanım durumu Seç"
            handleChange={handleChange}
            value={values.status}
            className={
              errors.status
                ? 'dropdown-select errorDropdown'
                : 'dropdown-select'
            }
          />
          <p className="errorMessage">{errors?.status}</p>
        </div>
      </div>

      <div className="productAddForm__productPrice">
        <h2>Fiyat</h2>
        <input
          name="price"
          onChange={(e) => {
            setValues({ ...values, price: Number(e.target.value) });
            handleChange();
          }}
          type="number"
          placeholder="Bir fiyat girin"
          value={values.price}
          className={errors.price && 'errorInput'}
        />
        <p className="errorMessage">{errors?.price}</p>

        <div className="offerOption">
          <h2>Fiyat ve Teklif opsiyonu</h2>

          <ToogleSwitch
            name="isOfferable"
            handleChange={handleChange}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductAddForm;
