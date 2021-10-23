/* eslint-disable react/prop-types */
import './register.scss';

import { registerAction } from 'actions/register';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import RegisterModel from '../../assets/images/model.png';
import Logo from '../../assets/svg/logo.svg';
import useForm from '../../useForm';
import validate from '../../validateInfo';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const register = useSelector((state) => state.register);
  const submitForm = (data) => {
    dispatch(registerAction(data));
  };
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/Home');
    }
  }, [history, register.registerData]);
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={RegisterModel} alt="model-img" />
      </div>
      <form onSubmit={handleSubmit} className="form-container">
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
            </div>
            <button onClick={handleSubmit} type="submit">
              Üye Ol
            </button>
            <div className="registerRedirect">
              <h2 className="mg ">
                Hesabın var mı?{' '}
                <span id="h2Redirect">
                  <Link to="/login">Giriş Yap </Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
