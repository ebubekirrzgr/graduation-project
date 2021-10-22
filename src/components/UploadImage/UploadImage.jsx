/* eslint-disable react/prop-types */
import './uploadImage.scss';

import postUploadImage from 'actions/uploadImage';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';

import drop from '../../assets/svg/drop.svg';

const UploadImage = ({ setSelected, values }) => {
  const dispatch = useDispatch();
  const uploadImageData = useSelector((state) => state.uploadImage);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) => dispatch(postUploadImage(file)));
    },
  });

  useEffect(() => {
    if (values.imageUrl !== uploadImageData.uploadImageData.url) {
      setSelected(uploadImageData.uploadImageData.url);
    }
  }, [setSelected, uploadImageData.uploadImageData.url, values.imageUrl]);

  return (
    <div className="uploadImage">
      <h1>Ürün Görseli</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="dropArea">
          <img src={drop} alt="drop" />
          <h3>Sürükleyip bırakarak</h3>
          <h3 className="orH">veya</h3>
          <button type="submit">Görsel Seçin</button>
          <h4>PNG ve JPEG Dosya boyutu: max. 400kb</h4>
        </div>
      </div>
      {uploadImageData?.uploadImageData?.url?.length > 0 && (
        <div className="uploadImageReview">
          <img
            className="uploadImageReview"
            src={uploadImageData.uploadImageData.url}
            alt="uploadImage"
          />
          <div className="imageDeleteButton">X</div>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
