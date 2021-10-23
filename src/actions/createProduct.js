import axios from 'axios';
import CREATE_PRODUCT from 'constants/createProduct';
import { toast } from 'react-toastify';

export const createProductPending = () => ({
  type: CREATE_PRODUCT.CREATE_PRODUCT_PENDING,
});

export const createProductSuccess = (data) => ({
  type: CREATE_PRODUCT.CREATE_PRODUCT_SUCCESS,
  payload: data,
});

export const createProductError = (err) => ({
  type: CREATE_PRODUCT.CREATE_PRODUCT_ERROR,
  payload: err,
});

const createProductAction = (data) => async (dispatch) => {
  dispatch(createProductPending());
  return axios
    .post('https://bootcampapi.techcs.io/api/fe/v1/product/create', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      dispatch(createProductSuccess(response.data));
      toast.success('Ürün başarıyla eklendi.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((err) => {
      dispatch(createProductError(err));
      toast.error('Eksik veya hatalı bilgi girdiniz.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export default createProductAction;
