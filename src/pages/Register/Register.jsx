import './register.scss';

import React from 'react';

import RegisterModel from '../../assets/images/model.png';
import Logo from '../../assets/svg/logo.svg';

const Register = () => (
  <div className="main-container">
    <div className="img-container">
      <img src={RegisterModel} alt="model-img" />
    </div>
    <form onSubmit={() => console.log('form')} className="form-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="register-container">
        <div className="form-group">
          <div className="register-text-container">
            <h1>Üye Ol</h1>
            <h2>Fırsatlardan yararlanmak için üye ol!</h2>
          </div>
          <div className="register-inputs">
            <h2>Email</h2>
            <input placeholder="Email@example.com" type="text" />
            <h2>Şifre</h2>
            <input placeholder="●●●●●" type="password" />
          </div>
          <button type="submit">Üye Ol</button>
          <div className="registerRedirect">
            <h2 className="mg ">
              Hesabın var mı? <h2 id="h2Redirect">Giriş Yap</h2>
            </h2>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Register;
