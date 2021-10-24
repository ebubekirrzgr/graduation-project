import axios from 'axios';
import CANCEL_OFFER from 'constants/cancelOffer';
import { toast } from 'react-toastify';

import fetchGivenOffers from './givenOffers';

const fetchSuccess = (data) => ({
  type: CANCEL_OFFER.CANCEL_OFFER_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: CANCEL_OFFER.CANCEL_OFFER_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: CANCEL_OFFER.CANCEL_OFFER_PENDING,
});

const cancelOffer = (offerId) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .delete(
      `https://bootcampapi.techcs.io/api/fe/v1/account/cancel-offer/${offerId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => {
      dispatch(fetchSuccess(data));
      toast.success('Teklif geri çekildi.', {
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
      toast.error('Teklifi geri çekme işlemi başarısız.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .finally(() => dispatch(fetchGivenOffers()));
};

export default cancelOffer;
