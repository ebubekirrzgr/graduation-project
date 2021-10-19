/* eslint-disable react-hooks/rules-of-hooks */
import './confirmModal.scss';

import fetchPurchase from 'actions/purchaseProduct';
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';

function confirmModal({ closeModal, id }) {
  const dispatch = useDispatch();
  return (
    <div className="confirmModal">
      <div className="confirmModalContainer">
        <div className="title">
          <h1>Satın Al</h1>
        </div>
        <div className="body">
          <h2>Satın Almak istiyor musunuz?</h2>
        </div>
        <div className="confirmModalButtons">
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
              dispatch(fetchPurchase(id));
            }}
          >
            Satın Al
          </Button>
        </div>
      </div>
    </div>
  );
}

export default confirmModal;
