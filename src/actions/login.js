import axios from 'axios';
import LOGIN from 'constants/login';
import { toast } from 'react-toastify';

export const loginRequest = () => ({
  type: LOGIN.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: LOGIN.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (err) => ({
  type: LOGIN.LOGIN_FAILURE,
  payload: err,
});

export const loginAction = (data) => async (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/authorization/signin', data)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('email', data.email);
      toast.success('Giriş başarılı!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      dispatch(loginFailure(err));
      toast.error('Emailiniz veya şifreniz hatalı.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
