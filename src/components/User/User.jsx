import './user.scss';

import React from 'react';

import userImg from '../../assets/svg/userimg.svg';

function User() {
  return (
    <>
      <div className="userComponent">
        <div className="userImg">
          <img src={userImg} alt="user img" />
        </div>
        <div className="userEmail">
          <h2>{localStorage.getItem('email')}</h2>
        </div>
      </div>
    </>
  );
}

export default User;
