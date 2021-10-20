import axios from 'axios';
import RECEIVED_OFFERS from 'constants/receivedOffers';

export const fetchSuccess = (data) => ({
  type: RECEIVED_OFFERS.RECEIVED_OFFERS_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: RECEIVED_OFFERS.RECEIVED_OFFERS_ERROR,
  payload: error,
});

export const fetchPending = () => ({
  type: RECEIVED_OFFERS.RECEIVED_OFFERS_PENDING,
});

const fetchReceivedOffers = () => async (dispatch) => {
  dispatch(fetchPending());
  axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/received-offers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchReceivedOffers;
