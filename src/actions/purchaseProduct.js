import axios from 'axios';
import PURCHASE from 'constants/purchase';

const fetchSuccess = (data) => ({
  type: PURCHASE.FETCH_PURCHASE_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: PURCHASE.FETCH_PURCHASE_FAILURE,
  payload: error,
});

const fetchRequest = () => ({
  type: PURCHASE.FETCH_PURCHASE_REQUEST,
});

const fetchPurchase = (productId) => async (dispatch) => {
  dispatch(fetchRequest());
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
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchPurchase;
