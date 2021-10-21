import './header.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/svg/logo.svg';
import Plus from '../../assets/svg/plus.svg';
import User from '../../assets/svg/user.svg';
import Button from '../Button/Button';

function Header() {
  const history = useHistory();

  const handleClick = (url) => history.push(url);

  return (
    <div className="header">
      <div className="container">
        <div
          onClick={() => handleClick('/Home')}
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
            onClick={() => handleClick('/ProductAdd')}
          >
            <img src={Plus} alt="plus-svg" />
            Ürün Ekle
          </Button>
          <Button
            type="submit"
            theme="secondary"
            size="medium"
            className="styledButton"
            onClick={() => handleClick('/Account')}
          >
            <img src={User} alt="plus-svg" />
            Hesabım
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
