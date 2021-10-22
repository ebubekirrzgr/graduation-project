import './productAddForm.scss';

import fetchBrands from 'actions/brands';
import fetchCategories from 'actions/categories';
import fetchColors from 'actions/colors';
import fetchStatus from 'actions/status';
import Dropdown from 'components/Dropdown';
import ToogleSwitch from 'components/ToggleSwitch';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductAddForm = () => {
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
        <input type="text" placeholder="Örnek: Iphone 12 Pro Max" />
      </div>

      <div className="productAddForm__productDescription">
        <h2>Ürün Adı</h2>
        <textarea
          placeholder="Ürün açıklaması girin"
          name="productName"
          id="productName"
          cols="20"
          rows="5"
        >
          {}
        </textarea>
      </div>

      <div className="productDropdown1">
        <div className="productCategory">
          <h2 className="dropdownH">Kategori</h2>
          <Dropdown options={categories.categoriesData} title="Kategori Seç" />
        </div>
        <div className="productBrand">
          <h2 className="dropdownH">Marka</h2>
          <Dropdown options={brands.brandsData} title="Marka Seç" />
        </div>
      </div>

      <div className="productDropdown2">
        <div className="productColor">
          <h2 className="dropdownH">Renk</h2>
          <Dropdown options={colors.colorsData} title="Renk Seç" />
        </div>
        <div className="productStatus">
          <h2 className="dropdownH">Kullanım Durumu</h2>
          <Dropdown options={status.statusData} title="Kullanım durumu Seç" />
        </div>
      </div>

      <div className="productAddForm__productPrice">
        <h2>Fiyat</h2>
        <input type="number" placeholder="Bir fiyat girin" />
        <div className="offerOption">
          <h2>Fiyat ve Teklif opsiyonu</h2>
          <ToogleSwitch />
        </div>
      </div>
    </div>
  );
};

export default ProductAddForm;
