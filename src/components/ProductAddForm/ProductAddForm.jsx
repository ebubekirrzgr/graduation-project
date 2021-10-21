import './productAddForm.scss';

import Dropdown from 'components/Dropdown';
import ToogleSwitch from 'components/ToggleSwitch';
import React from 'react';

const ProductAddForm = () => {
  console.log('sss');
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
          <Dropdown />
        </div>
        <div className="productBrand">
          <h2 className="dropdownH">Marka</h2>
          <Dropdown />
        </div>
      </div>

      <div className="productDropdown2">
        <div className="productColor">
          <h2 className="dropdownH">Renk</h2>
          <Dropdown />
        </div>
        <div className="productStatus">
          <h2 className="dropdownH">Kullanım Durumu</h2>
          <Dropdown />
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
