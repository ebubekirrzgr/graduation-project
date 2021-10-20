import './offers.scss';

import fetchGivenOffers from 'actions/givenOffers';
import fetchReceivedOffers from 'actions/receivedOffers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import product from '../../assets/images/offerModel.png';
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
                <img src={product} alt="product" />
                <div className="offerDetail">
                  <h2>{item.product.title}</h2>
                  <div className="receivedOffer">
                    <h2 className="staticFont">Alınan Teklif:</h2>
                    <h2 className="dynamicFont">{item.offeredPrice} TL</h2>
                  </div>
                </div>
              </div>
              <div className="offerButtons">
                <Button
                  type="submit"
                  theme="primary"
                  size="medium"
                  className="styledButton"
                >
                  Onayla
                </Button>
                <Button
                  type="submit"
                  theme="reject"
                  size="medium"
                  className="styledButton"
                >
                  Reddet
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Offers;
