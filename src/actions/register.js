import axios from 'axios';
import REGISTER from 'constants/register';
import { toast } from 'react-toastify';

export const registerRequest = () => ({
  type: REGISTER.REGISTER_REQUEST,
});

export const registerSuccess = (data) => ({
  type: REGISTER.REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (err) => ({
  type: REGISTER.REGISTER_FAILURE,
  payload: err,
});

export const registerAction = (data) => async (dispatch) => {
  dispatch(registerRequest());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/authorization/signup', data)
    .then((response) => {
      dispatch(registerSuccess(response.data));
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('email', data.email);
      toast.success('Kayıt işlemi başarılı.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      dispatch(registerFailure(err));
      toast.error('Hatalı veya eksik bilgi girdiniz.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
