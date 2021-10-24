/* eslint-disable react-hooks/rules-of-hooks */
import './cancelOfferModal.scss';

import cancelOffer from 'actions/cancelOffer';
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';

function cancelModal({ closeModal, offerId }) {
  const dispatch = useDispatch();
  return (
    <div className="cancelModal">
      <div className="cancelModalContainer">
        <div className="title">
          <h1>Teklifi Geri Çek</h1>
        </div>
        <div className="body">
          <h2>Teklifi Geri Çekmek istiyor musunuz ?</h2>
        </div>
        <div className="cancelModalButtons">
          <Button
            type="submit"
            theme="secondary"
            size="large"
            className="styledButton"
            onClick={() => closeModal(false)}
          >
            Vazgeç
          </Button>
          <Button
            type="submit"
            theme="primary"
            size="large"
            className="styledButton"
            onClick={() => {
              closeModal(false);
              dispatch(cancelOffer(offerId));
            }}
          >
            Teklifi Geri Çek
          </Button>
        </div>
      </div>
    </div>
  );
}

export default cancelModal;
