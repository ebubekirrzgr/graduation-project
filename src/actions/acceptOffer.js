import axios from 'axios';
import ACCEPT_OFFERS from 'constants/acceptOffers';
import { toast } from 'react-toastify';

import fetchReceivedOffers from './receivedOffers';

const fetchSuccess = (data) => ({
  type: ACCEPT_OFFERS.ACCEPT_OFFERS_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: ACCEPT_OFFERS.ACCEPT_OFFERS_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: ACCEPT_OFFERS.ACCEPT_OFFERS_PENDING,
});

const acceptOffers = (offerId) => async (dispatch) => {
  dispatch(fetchPending());
  return axios
    .put(
      `https://bootcampapi.techcs.io/api/fe/v1/account/accept-offer/${offerId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then((data) => {
      dispatch(fetchSuccess(data));
      toast.success('Teklif onaylandı.', {
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
      toast.error('Teklif onaylama işlemi başarısız.', {
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

export default acceptOffers;
