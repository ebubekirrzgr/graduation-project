import axios from 'axios';
import PURCHASE from 'constants/purchase';

import fetchProductDetail from './productDetail';

const fetchSuccess = (data) => ({
  type: PURCHASE.FETCH_PURCHASE_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: PURCHASE.FETCH_PURCHASE_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: PURCHASE.FETCH_PURCHASE_PENDING,
});

const fetchPurchase = (productId) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/product/purchase/${productId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)))
    .then(() => dispatch(fetchProductDetail(productId)));
};

export default fetchPurchase;
