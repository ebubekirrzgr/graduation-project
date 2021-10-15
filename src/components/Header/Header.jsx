import './header.scss';

import React from 'react';

import Logo from '../../assets/svg/logo.svg';
import Plus from '../../assets/svg/plus.svg';
import User from '../../assets/svg/user.svg';
import Button from '../Button/Button';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__buttons">
        <Button
          type="submit"
          theme="secondary"
          size="medium"
          className="styledButton"
        >
          <img src={Plus} alt="plus-svg" />
          Ürün Ekle
        </Button>
        <Button
          type="submit"
          theme="secondary"
          size="medium"
          className="styledButton"
        >
          <img src={User} alt="plus-svg" />
          Hesabım
        </Button>
      </div>
    </div>
  );
}

export default Header;
