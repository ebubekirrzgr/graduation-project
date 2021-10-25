/* eslint-disable react/prop-types */
import './uploadImage.scss';

import postUploadImage, { uploadImageDelete } from 'actions/uploadImage';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import drop from '../../assets/svg/drop.svg';

const UploadImage = ({ setSelected, values }) => {
  const dispatch = useDispatch();
  const uploadImageData = useSelector((state) => state.uploadImage);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    maxSize: 409600,
    onDrop: (acceptedFiles, fileRejections) => {
      acceptedFiles.map((file) => dispatch(postUploadImage(file)));

      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === 'file-too-large') {
            toast.error(`Dosya boyutu 400kb'den fazla.`, {
              position: 'top-right',
              autoClose: 3000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      });
    },
    maxFilesize: 1, // max file size in MB,
  });

  useEffect(() => {
    if (values.imageUrl !== uploadImageData.uploadImageData.url) {
      setSelected(uploadImageData.uploadImageData.url);
    }
  }, [setSelected, uploadImageData.uploadImageData.url, values.imageUrl]);

  return (
    <div className="uploadImage">
      <h1>Ürün Görseli</h1>
      {uploadImageData.isFetching && (
        <div className="dropArea">
          <ProgressBar progress={uploadImageData.uploadProgress} />
        </div>
      )}

      {!uploadImageData.isFetching &&
        uploadImageData.uploadImageData?.url.length === 0 && (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="dropArea" error={uploadImageData.errors}>
              <img src={drop} alt="drop" />
              <h3>Sürükleyip bırakarak</h3>
              <h3 className="orH">veya</h3>
              <button type="submit">Görsel Seçin</button>
              <h4>PNG ve JPEG Dosya boyutu: max. 400kb</h4>
            </div>
          </div>
        )}
      {uploadImageData?.uploadImageData?.url?.length > 0 && (
        <div className="uploadImageReview">
          <img
            className="uploadImageReview"
            src={uploadImageData.uploadImageData.url}
            alt="uploadImage"
          />
          <span
            onClick={() => dispatch(uploadImageDelete())}
            className="imageDeleteButton"
            aria-hidden="true"
          >
            X
          </span>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
