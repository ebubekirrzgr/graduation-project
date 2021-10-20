import axios from 'axios';
import GIVEN_OFFERS from 'constants/givenOffers';

export const fetchSuccess = (data) => ({
  type: GIVEN_OFFERS.GIVEN_OFFERS_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: GIVEN_OFFERS.GIVEN_OFFERS_ERROR,
  payload: error,
});

export const fetchPending = () => ({
  type: GIVEN_OFFERS.GIVEN_OFFERS_PENDING,
});

const fetchGivenOffers = () => async (dispatch) => {
  dispatch(fetchPending());
  axios
    .get('https://bootcampapi.techcs.io/api/fe/v1/account/given-offers', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => dispatch(fetchSuccess(res.data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchGivenOffers;
