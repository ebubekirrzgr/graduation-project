/* eslint-disable no-debugger */
import './product.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import fetchProductDetails from '../../actions/productDetail';
import Button from '../Button/Button';
import ConfirmModal from '../Modals/ConfirmModal/confirmModal';
import OfferModal from '../Modals/OfferModal/offerModal';

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [openConfirmModal, setConfirmModal] = useState(false);
  const [openOfferModal, setOfferModal] = useState(false);
  console.log('id :>> ', id);
  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (productDetail.isFetching && !productDetail.productDetailData.id)
    return <div>Loading</div>;
  if (productDetail.isError)
    return <div>{productDetail.productDetailData.error}</div>;
  return (
    <>
      <div className="product-details">
        <div className="product">
          <div className="product__image">
            <img
              src={productDetail.productDetailData.imageUrl}
              alt={productDetail.productDetailData.title}
            />
          </div>
          <div className="product__detail">
            <h1 className="product__title">
              {productDetail.productDetailData.title}
            </h1>
            <div className="product__specification">
              <div className="product__brand">
                <h5>Marka: </h5>
                <span>{productDetail.productDetailData.brand.title}</span>
              </div>
              <div className="product__color">
                <h5>Renk: </h5>
                <span>{productDetail.productDetailData.color.title}</span>
              </div>
              <div className="product__status">
                <h5>Kullanım Durumu: </h5>
                <span>{productDetail.productDetailData.status.title}</span>
              </div>
            </div>
            <h2 className="product__price">
              <span>
                {productDetail.productDetailData.price
                  .toLocaleString('tr-TR', {
                    style: 'currency',
                    currency: 'TRY',
                  })
                  .slice(1)}
              </span>{' '}
              TL
            </h2>
            <div
              className={
                productDetail.productDetailData.isSold
                  ? 'isSoldButton buttonDisplayBlock'
                  : 'buttonDisplayNone'
              }
            >
              <Button
                type="submit"
                theme="warning"
                size="large"
                className="confirmModalBtn"
              >
                Bu Ürün Satışta Değil
              </Button>
            </div>
            {/*  I control the sales status here */}
            {!productDetail.productDetailData.isSold && (
              <div className="product__offerButtons">
                <Button
                  type="submit"
                  theme="primary"
                  size="large"
                  className="confirmModalBtn"
                  onClick={() => {
                    setConfirmModal(true);
                  }}
                >
                  Satın Al
                </Button>
                <Button
                  type="submit"
                  theme="secondary"
                  size="large"
                  className="offerModalBtn"
                  onClick={() => {
                    setOfferModal(true);
                  }}
                >
                  Teklif Ver
                </Button>
              </div>
            )}
            {openConfirmModal && (
              <ConfirmModal
                closeModal={setConfirmModal}
                id={productDetail.productDetailData.id}
              />
            )}
            {openOfferModal && (
              <OfferModal
                closeModal={setOfferModal}
                img={productDetail.productDetailData.imageUrl}
                title={productDetail.productDetailData.brand.title}
                price={productDetail.productDetailData.price}
                offerId={productDetail.productDetailData.id}
              />
            )}
            <h4 className="product__desc">Açıklama</h4>
            <span className="product__description">
              {productDetail.productDetailData.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
