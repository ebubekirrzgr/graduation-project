import './login.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import LoginModel from '../../assets/images/model.png';
import Logo from '../../assets/svg/logo.svg';
import useForm from '../../useForm';
import validate from '../../validateInfo';

const Login = () => {
  const submitForm = () => {
    console.log('sa');
  };
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={LoginModel} alt="model-img" />
      </div>
      <form onSubmit={handleSubmit} className="form-container">
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
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email@example.com"
                value={values.email}
                onChange={handleChange}
                className={errors.email ? 'errorInput' : 'defaultInput'}
              />
              <h2>Şifre</h2>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="●●●●●"
                value={values.password}
                onChange={handleChange}
                className={errors.password ? 'errorInput' : 'defaultInput'}
              />
              <h3>Şifremi Unuttum</h3>
            </div>
            <button type="submit">Giriş</button>
            <div className="registerRedirect">
              <h2 className="mg ">
                Hesabın yok mu?{' '}
                <span id="h2Redirect">
                  <Link to="/Register">Giriş Yap </Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
