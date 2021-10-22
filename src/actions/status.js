import STATUS from 'constants/status';

const fetchSuccess = (data) => ({
  type: STATUS.FETCH_STATUS_SUCCESS,
  payload: data,
});

const fetchError = (error) => ({
  type: STATUS.FETCH_STATUS_ERROR,
  payload: error,
});

const fetchPending = () => ({
  type: STATUS.FETCH_STATUS_PENDING,
});

const fetchStatus = () => async (dispatch) => {
  dispatch(fetchPending());
  return fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/status/all')
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchError(error)));
};

export default fetchStatus;
