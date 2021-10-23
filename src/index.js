import './style/custom.scss';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';
import store from './store';

render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </Provider>,
  document.getElementById('root')
);
