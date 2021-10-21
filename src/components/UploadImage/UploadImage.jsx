import './uploadImage.scss';

import React from 'react';

import drop from '../../assets/svg/drop.svg';

const UploadImage = () => {
  console.log('islemler eklenecek');
  return (
    <div className="uploadImage">
      <h1>Ürün Görseli</h1>
      <div className="dropArea">
        <img src={drop} alt="drop" />
        <h3>Sürükleyip bırakarak</h3>
        <h3 className="orH">veya</h3>
        <button type="submit">Görsel Seçin</button>
        <h4>PNG ve JPEG Dosya boyutu: max. 400kb</h4>
      </div>
    </div>
  );
};

export default UploadImage;
