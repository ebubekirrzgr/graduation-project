import axios from 'axios';
import REJECT_OFFERS from 'constants/rejectOffers';
import { toast } from 'react-toastify';

import fetchReceivedOffers from './receivedOffers';

const fetchSuccess = (data) => ({
  type: REJECT_OFFERS.REJECT_OFFERS_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: REJECT_OFFERS.REJECT_OFFERS_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: REJECT_OFFERS.REJECT_OFFERS_PENDING,
});

const rejectOffers = (offerId, obj) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .post(
      `https://bootcampapi.techcs.io/api/fe/v1/account/reject-offer/${offerId}`,
      obj,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => {
      dispatch(fetchSuccess(data));
      toast.success('Teklif reddedildi', {
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
      toast.error('Teklif reddetme işlemi hatalı.', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .finally(() => dispatch(fetchReceivedOffers()));
};

export default rejectOffers;
