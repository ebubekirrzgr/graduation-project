/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './offerModal.scss';

import postOffer from 'actions/offer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import checked from '../../../assets/svg/checked.svg';
import closeSvg from '../../../assets/svg/close.svg';
import unchecked from '../../../assets/svg/unchecked.svg';
import Button from '../../Button/Button';

function confirmModal({ closeModal, img, price, title, offerId }) {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const [obj, setObj] = useState({ offeredPrice: 0 });
  const offerCalculator = (percent) => {
    setObj({
      ...obj,
      offeredPrice: (percent * Number(price)) / 100,
    });
  };
  const calcPrice = (percent) => {
    offerCalculator(percent);
  };
  return (
    <div className="offerModal">
      <div className="offerModalContainer">
        <div className="title">
          <h1>Teklif Ver</h1>
          <img
            src={closeSvg}
            role="none"
            alt="closeSvg"
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="body">
          <div className="productImg">
            <img src={img} alt="urun" />
            <h3>{title}</h3>
          </div>
          <h2>{price} TL</h2>
        </div>
        <div className="offers">
          <div
            onClick={() => {
              setSelected('twentyPercentOffer');
              calcPrice(20);
            }}
            className={
              selected === 'twentyPercentOffer'
                ? 'twentyPercentOffer checked'
                : 'twentyPercentOffer'
            }
            role="none"
          >
            <img
              src={selected === 'twentyPercentOffer' ? checked : unchecked}
              alt="checked"
            />
            %20’si Kadar Teklif Ver
          </div>
          <div
            onClick={() => {
              setSelected('thirtyPercentOffer');
              calcPrice(30);
            }}
            className={
              selected === 'thirtyPercentOffer'
                ? 'thirtyPercentOffer checked'
                : 'thirtyPercentOffer'
            }
            role="none"
          >
            <img
              src={selected === 'thirtyPercentOffer' ? checked : unchecked}
              alt="checked"
            />
            %30’u Kadar Teklif Ver
          </div>
          <div
            onClick={() => {
              setSelected('fortyPercentOffer');
              calcPrice(40);
            }}
            className={
              selected === 'fortyPercentOffer'
                ? 'fortyPercentOffer checked'
                : 'fortyPercentOffer'
            }
            role="none"
          >
            <img
              src={selected === 'fortyPercentOffer' ? checked : unchecked}
              alt="checked"
            />
            %40’ı Kadar Teklif Ver
          </div>
        </div>
        <div className="customOffer">
          <input
            onClick={() => setSelected('')}
            onChange={(e) => {
              setObj({ ...obj, offeredPrice: Number(e.target.value) });
            }}
            value={obj.offeredPrice > 0 ? obj.offeredPrice : ''}
            placeholder="Teklif Belirle"
            type="number"
          />
        </div>
        <div className="offerModalButton">
          <Button
            type="submit"
            theme="primary"
            size="large"
            className="confirmButton"
            onClick={() => {
              dispatch(postOffer(offerId, obj));
              closeModal(false);
            }}
          >
            Onayla
          </Button>
        </div>
      </div>
    </div>
  );
}

export default confirmModal;
