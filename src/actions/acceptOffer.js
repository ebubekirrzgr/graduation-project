import axios from 'axios';
import ACCEPT_OFFERS from 'constants/acceptOffers';

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
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)))
    .finally(() => dispatch(fetchReceivedOffers()));
};

export default acceptOffers;
