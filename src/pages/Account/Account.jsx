import './account.scss';

import Header from 'components/Header';
import Offers from 'components/Offers';
import User from 'components/User';
import React from 'react';

function Account() {
  return (
    <>
      <Header />
      <div className="container">
        <User />
        <Offers />
      </div>
    </>
  );
}

export default Account;
