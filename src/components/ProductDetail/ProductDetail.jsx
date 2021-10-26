import './product.scss';

import fetchGivenOffers from 'actions/givenOffers';
import CancelModal from 'components/Modals/CancelModal/cancelOfferModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import fetchProductDetails from '../../actions/productDetail';
import spinner from '../../assets/loading.svg';
import Button from '../Button/Button';
import ConfirmModal from '../Modals/ConfirmModal/confirmModal';
import OfferModal from '../Modals/OfferModal/offerModal';

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.productDetail);
  const givenOffers = useSelector((state) => state.givenOffers);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [openConfirmModal, setConfirmModal] = useState(false);
  const [openOfferModal, setOfferModal] = useState(false);
  const [openCancelModal, setCancelModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
    dispatch(fetchGivenOffers());
  }, [dispatch, id]);

  if (productDetail.isFetching && !productDetail.productDetailData.id) {
    return (
      <div className="spinner">
        <img src={spinner} alt="" />
      </div>
    );
  }

  if (productDetail.isError) {
    return <div>{productDetail.productDetailData.error}</div>;
  }

  const givenOffer = givenOffers?.givenOffersData.filter(
    (item) => item.product.id === id
  );

  console.log('givenOffer :>> ', givenOffer[0]?.id);

  return (
    <>
      {givenOffer?.product?.id}
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

            {productDetail.productDetailData.id ===
              givenOffer[0]?.product?.id && (
              <div
                className={
                  !productDetail.productDetailData.isSold
                    ? 'isSoldButton buttonDisplayBlock'
                    : 'buttonDisplayNone'
                }
              >
                <Button
                  type="submit"
                  theme="offer"
                  size="medium"
                  className="givenOfferButton"
                >
                  Verilen Teklif:
                  <h5>
                    {givenOffer[0].offeredPrice
                      .toLocaleString('tr-TR', {
                        style: 'currency',
                        currency: 'TRY',
                      })
                      .slice(1)}{' '}
                    TL
                  </h5>
                </Button>
              </div>
            )}

            {/*  I control the sales status here */}
            {!productDetail.productDetailData.isSold &&
              productDetail.productDetailData.id !==
                givenOffer[0]?.product?.id && (
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

            {!productDetail.productDetailData.isSold &&
              productDetail.productDetailData.id ===
                givenOffer[0]?.product?.id && (
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
                      setCancelModal(true);
                    }}
                  >
                    Teklifi Geri Çek
                  </Button>
                </div>
              )}

            {openConfirmModal && (
              <ConfirmModal
                closeModal={setConfirmModal}
                id={productDetail.productDetailData.id}
              />
            )}
            {openCancelModal && (
              <CancelModal
                closeModal={setCancelModal}
                offerId={givenOffer[0]?.id}
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
