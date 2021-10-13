import './header.scss';

import React from 'react';

import Logo from '../../assets/svg/logo.svg';

function Header() {
  return (
    <div className="headers">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__buttons">
        <button type="submit">Hesabım</button>
        <button type="submit">Hesabım</button>
      </div>
    </div>
  );
}

export default Header;
