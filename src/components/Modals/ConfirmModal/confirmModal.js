import './confirmModal.scss';

import React from 'react';

import Button from '../../Button/Button';

function confirmModal({ closeModal }) {
  return (
    <div className="confirmModal">
      <div className="modalContainer">
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
          >
            Satın Al
          </Button>
        </div>
      </div>
    </div>
  );
}

export default confirmModal;
