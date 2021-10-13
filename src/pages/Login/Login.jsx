import './login.scss';

import React from 'react';

import LoginModel from '../../assets/images/model.png';
import Logo from '../../assets/svg/logo.svg';

const Login = () => (
  <div className="main-container">
    <div className="img-container">
      <img src={LoginModel} alt="model-img" />
    </div>
    <form
      onSubmit={() => console.log('burası gözükmeyecek')}
      className="form-container"
    >
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="login-container">
        <div className="form-group">
          <div className="login-text-container">
            <h1>Giriş Yap</h1>
            <h2>Fırsatlardan yararlanmak için giriş yap!</h2>
          </div>
          <div className="login-inputs">
            <h2>Email</h2>
            <input placeholder="Email@example.com" type="text" />
            <h2>Şifre</h2>
            <input placeholder="●●●●●" type="password" />
            <h3>Şifremi Unuttum</h3>
          </div>
          <button type="submit">Giriş</button>
          <div className="registerRedirect">
            <h2 className="mg ">
              Hesabın yok mu? <h2 id="h2Redirect">Üye Ol</h2>
            </h2>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Login;
