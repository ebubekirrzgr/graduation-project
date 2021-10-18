import './header.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/svg/logo.svg';
import Plus from '../../assets/svg/plus.svg';
import User from '../../assets/svg/user.svg';
import Button from '../Button/Button';

function Header() {
  const history = useHistory();

  function handleClick() {
    history.push('/Home');
  }
  return (
    <div className="header">
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-hidden="true"
        className="header__logo"
      >
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
