import axios from 'axios';
import OFFER from 'constants/offer';
import { toast } from 'react-toastify';

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
    .then((data) => {
      dispatch(fetchSuccess(data));
      toast.success('Teklif verme işlemi başarılı.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((error) => {
      dispatch(fetchError(error));
      toast.error('Kendi ürünüze teklif veremezsiniz.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .then(() => dispatch(fetchProductDetail(offerId)));
};

export default postOffer;
