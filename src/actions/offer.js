import axios from 'axios';
import OFFER from 'constants/offer';

import fetchProductDetail from './productDetail';

const fetchSuccess = (data) => ({
  type: OFFER.FETCH_OFFER_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: OFFER.FETCH_OFFER_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: OFFER.FETCH_OFFER_PENDING,
});

const postOffer = (offerId, obj) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(
      `https://bootcampapi.techcs.io/api/fe/v1/product/offer/${offerId}`,
      obj,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)))
    .then(() => dispatch(fetchProductDetail(offerId)));
};

export default postOffer;
