import axios from 'axios';
import CREATE_PRODUCT from 'constants/createProduct';

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
    })
    .catch((err) => dispatch(createProductError(err)));
};

export default createProductAction;
