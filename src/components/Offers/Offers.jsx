import './offers.scss';

import acceptOffers from 'actions/acceptOffer';
import fetchGivenOffers from 'actions/givenOffers';
import fetchPurchase from 'actions/purchaseProduct';
import fetchReceivedOffers from 'actions/receivedOffers';
import rejectOffers from 'actions/rejectOffers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';

const Offers = () => {
  const receivedOffers = useSelector((state) => state.receivedOffers);
  const givenOffers = useSelector((state) => state.givenOffers);
  const dispatch = useDispatch();
  const [renderList, setRenderList] = useState(
    receivedOffers.receivedOffersData
  );
  const [offerState, setOfferState] = useState(true);
  useEffect(() => {
    if (
      receivedOffers.receivedOffersData.length === 0 &&
      givenOffers.givenOffersData.length === 0
    ) {
      dispatch(fetchReceivedOffers());
      dispatch(fetchGivenOffers());
    } else if (receivedOffers.receivedOffersData.length === 0) {
      dispatch(fetchReceivedOffers());
    } else if (givenOffers.givenOffersData.length === 0) {
      dispatch(fetchGivenOffers());
    }
  }, [
    dispatch,
    givenOffers.givenOffersData.length,
    receivedOffers.receivedOffersData.length,
  ]);
  useEffect(() => {
    if (offerState) {
      setRenderList(receivedOffers.receivedOffersData);
    } else {
      setRenderList(givenOffers.givenOffersData);
    }
  }, [
    givenOffers.givenOffersData,
    offerState,
    receivedOffers.receivedOffersData,
  ]);

  if (receivedOffers.isFetching) return <div>Loading...</div>;
  if (receivedOffers.isError) return <div>Error</div>;
  return (
    <>
      <div className="offers">
        <div className="offersNav">
          <ul>
            <li
              className={offerState ? 'selected' : ''}
              aria-hidden="true"
              onClick={() => {
                setOfferState(true);
              }}
            >
              Teklif Aldıklarım
            </li>
            <li
              className={!offerState ? 'selected' : ''}
              aria-hidden="true"
              onClick={() => {
                setOfferState(false);
              }}
            >
              Teklif Verdiklerim
            </li>
          </ul>
        </div>
        {renderList.length > 0 &&
          renderList.map((item) => (
            <div className="offersProducts" key={item.id}>
              <div className="offerProductDetail">
                <img src={item.product.imageUrl} alt="product" />
                <div className="offerDetail">
                  <h2>{item.product.title}</h2>
                  <div className="receivedOffer">
                    <div
                      className={
                        offerState ? 'givenH' : 'receivedH displayNone'
                      }
                    >
                      <h2 className="staticFont">Alınan Teklif:</h2>
                    </div>
                    <div
                      className={
                        !offerState ? 'receivedH' : 'givenH displayNone'
                      }
                    >
                      <h2 className="staticFont">Verilen Teklif:</h2>
                    </div>
                    <h2 className="dynamicFont">
                      {item.offeredPrice
                        .toLocaleString('tr-TR', {
                          style: 'currency',
                          currency: 'TRY',
                        })
                        .slice(1)}{' '}
                      TL
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className={
                  !item.isSold && offerState && item.status === 'offered'
                    ? 'offerButtons displayBlock'
                    : 'displayNone'
                }
              >
                <Button
                  type="submit"
                  theme="primary"
                  size="medium"
                  className="styledButton"
                  onClick={() => dispatch(acceptOffers(item.id))}
                >
                  Onayla
                </Button>
                <Button
                  type="submit"
                  theme="reject"
                  size="medium"
                  className="styledButton"
                  onClick={() => dispatch(rejectOffers(item.id))}
                >
                  Reddet
                </Button>
              </div>
              <div
                className={
                  !item.isSold && item.status === 'rejected'
                    ? 'rejectOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Reddedildi</p>
              </div>
              <div
                className={
                  item.isSold && item.status === 'rejected'
                    ? 'rejectOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Reddedildi</p>
              </div>
              <div
                className={
                  item.isSold && item.status === 'offered' && offerState
                    ? 'rejectOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Reddedildi</p>
              </div>
              <div
                className={
                  !item.isSold && item.status === 'accepted' && !offerState
                    ? 'acceptOffer displayBlock'
                    : 'displayNone'
                }
              >
                <Button
                  type="submit"
                  theme="primary"
                  size="medium"
                  className="styledButton"
                  onClick={() => dispatch(fetchPurchase(item.product.id))}
                >
                  Satın Al
                </Button>
                <p>Onaylandı</p>
              </div>
              <div
                className={
                  item.isSold === 'sold' &&
                  item.status === 'accepted' &&
                  !offerState
                    ? 'soldOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Satın Alındı</p>
              </div>
              <div
                className={
                  item.isSold === 'sold' &&
                  item.status === 'offered' &&
                  !offerState
                    ? 'rejectOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Ürün satılmış</p>
              </div>
              <div
                className={
                  item.isSold && item.status === 'accepted' && offerState
                    ? 'soldOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Satıldı</p>
              </div>
              <div
                className={
                  !item.isSold && item.status === 'offered' && !offerState
                    ? 'waitingOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Cevap Bekleniyor</p>
              </div>
              <div
                className={
                  !item.isSold && item.status === 'accepted' && offerState
                    ? 'acceptOffer displayBlock'
                    : 'displayNone'
                }
              >
                <p>Onaylandı</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Offers;
